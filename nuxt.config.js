export default {
    target: 'static',
    ssr: true,
    /*
     ** Headers of the page
     */
    head: {
        title: 'Argon',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
    },
    server: {
        port: parseInt(process.env.PORT),
        host: '0.0.0.0'
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#7289DA' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) { },
    },
};
