import type { Config } from 'tailwindcss'
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons"

export default <Partial<Config>>{
    theme: {
        colors: {
            'midnight': '#03071E',
            'offwhite': '#E9ECEF',
            'lime': '#70F996',
            'mint': '#B9FFCD'
        },
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
        }
    },
    plugins: [
        iconsPlugin({
          collections: getIconCollections(["mdi"]),
        }),
      ],
}