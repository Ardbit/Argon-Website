export default {
    ssr: true,
    target: 'static',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Argon - Elevate your server.',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            }
        ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,500&display=swap' },
        { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.15.1/css/all.css' },
        { rel: 'stylesheet', href: '/global.css' }
    ],
},
/*
 ** Customize the progress-bar color
 */
loading: { color: '#FFF' },
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
