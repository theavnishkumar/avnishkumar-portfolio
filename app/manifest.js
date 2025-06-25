export default function manifest() {
    return {
        name: 'Avnish Kumar - Web Developer',
        short_name: 'Avnish Kumar',
        description: "Avnish Kumar is a Full Stack Web Developer from Buxar, Bihar, and a 2024 Computer Science graduate from Gyan Ganga Institute of Technology and Sciences, Jabalpur. He builds fast, clean, and responsive web apps using React, Node.js, Express, MongoDB, NestJS, and TypeScript.",
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}