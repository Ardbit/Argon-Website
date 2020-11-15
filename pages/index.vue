<template>
    <div class="container">
        <div>
            <h1 class="title">
                Argon
            </h1>
            <h2 class="subtitle">
                For the better discord servers.
            </h2>
            <div class="links">
                <a href="https://discord.com/oauth2/authorize?client_id=776342842543964210&permissions=8&scope=bot"
                   target="popup"
                   class="button--invite">
                    Invite
                </a>
                <a href="https://discord.gg/5yGanxWBHv"
                   target="popup"
                   class="button--support">
                    Support
                </a>
            </div>
        </div>
    </div>
</template>

<style>
    body, html {
        font-family: 'Uni Sans Heavy Caps', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        background: #2C2F33;
    }

    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        display: block;
        font-size: 100px;
        color: #FFFFFF;
        letter-spacing: 1px;
    }

    .subtitle {
        font-size: 42px;
        color: #FFFFFF;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }

        .links a {
            padding: 5px 20px;
            text-align: center;
            margin: 20px;
        }

    .button--invite {
        border: none;
        border-radius: 24px;
        outline: none;
        text-decoration: none;
        color: #FFFFFF;
        background: #7289DA;
    }

    .button--support {
        border: none;
        border-radius: 24px;
        outline: none;
        text-decoration: none;
        color: #FFFFFF;
        background: #99AAB5;
    }
</style>
