<template>
    <div class="container">
        <div>
            <logo />
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

<script>
    import Logo from '~/components/Logo.vue'

    export default {
        components: {
            Logo
        }
    }

        (function () {

            var frame = document.createElement('iframe');
            frame.src = 'https://r4mk7mslg7x6.statuspage.io/embed/frame';
            frame.style.position = 'fixed';
            frame.style.border = 'none';
            frame.style.boxShadow = '0 20px 32px -8px rgba(9,20,66,0.25)';
            frame.style.zIndex = '9999';
            frame.style.transition = 'left 1s ease, bottom 1s ease, right 1s ease';

            var mobile;
            if (mobile = screen.width < 450) {
                frame.src += '?mobile=true';
                frame.style.height = '20vh';
                frame.style.width = '100vw';
                frame.style.left = '-9999px';
                frame.style.bottom = '-9999px';
                frame.style.transition = 'bottom 1s ease';
            } else {
                frame.style.height = '115px';
                frame.style.width = '320px';
                frame.style.left = '-9999px';
                frame.style.right = 'auto';
                frame.style.bottom = '60px';
            }

            document.body.appendChild(frame);

            var actions = {
                showFrame: function () {
                    if (mobile) {
                        frame.style.left = '0';
                        frame.style.bottom = '0';
                    }
                    else {
                        frame.style.left = '60px';
                        frame.style.right = 'auto'
                    }
                },
                dismissFrame: function () {
                    frame.style.left = '-9999px';
                }
            }

            window.addEventListener('message', function (event) {
                if (event.data.action && actions.hasOwnProperty(event.data.action)) {
                    actions[event.data.action](event.data);
                }
            }, false);

            window.statusEmbedTest = actions.showFrame;
        })();
</script>

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
