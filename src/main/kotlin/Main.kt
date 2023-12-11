/**

Notify
Copyright (C) 2023 Russell Banks

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

 */

import com.kotlindiscord.kord.extensions.ExtensibleBot
import com.kotlindiscord.kord.extensions.checks.isNotBot
import data.Dao
import dev.kord.gateway.Intent
import dev.kord.gateway.Intents
import dev.kord.gateway.NON_PRIVILEGED
import dev.kord.gateway.PrivilegedIntent
import extensions.ConfigureExtension
import extensions.joinleaveupdate.CreateChannelExtension
import extensions.joinleaveupdate.DeleteChannelExtension
import extensions.joinleaveupdate.LeaveGuildExtension
import extensions.joinleaveupdate.NewGuildExtension
import extensions.notify.NotifyExtension
import extensions.voicestateupdate.VoiceStateExtension

@OptIn(PrivilegedIntent::class)
suspend fun main() {
    Dao.setupCache()
    ExtensibleBot(EnvironmentVariables.discordApiKey) {
        intents {
            +Intents.NON_PRIVILEGED
            +Intent.Guilds
            +Intent.GuildVoiceStates
            +Intent.GuildMembers
        }

        applicationCommands {
            defaultGuild(EnvironmentVariables.defaultGuildId)
        }

        cache {
            cachedMessages = null
        }

        presence {
            EnvironmentVariables.playing?.let(::playing)
        }

        extensions {
            add(::NotifyExtension)
            add(::ConfigureExtension)
            add(::VoiceStateExtension)
            add(::NewGuildExtension)
            add(::LeaveGuildExtension)
            add(::DeleteChannelExtension)
            add(::CreateChannelExtension)

            help {
                check { isNotBot() }
                pingInReply = false
            }
        }
    }.start()
}
