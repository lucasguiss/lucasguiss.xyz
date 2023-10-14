import type { Config } from 'tailwindcss'
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons"

export default <Partial<Config>>{
    theme: {
        colors: {
            'midnight': '#03071E',
            'offwhite': '#E9ECEF',
            'grey': '#D1D1D1',
            'lime': '#70F996',
            'mint': '#B9FFCD'
        },
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
        },
        extend: {
            width: {
              '128': '41rem',
            }
          }
    },
    plugins: [
        iconsPlugin({
            collections: getIconCollections(["mdi"]),
        }),
    ],
}