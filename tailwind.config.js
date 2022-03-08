module.exports = {
    mode: 'jit',
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    important: false,
    theme: {
        extend: {
            fontFamily: {
                400: [
                    'plus_jakarta_sansregular',
                ],
                500: [
                    'plus_jakarta_sansmedium',
                ],
                700: [
                    'plus_jakarta_sansbold',
                ],
                900: [
                    'plus_jakarta_sansextrabold',
                ],
            },
            colors: {
                'red': '#ff5e69',
                'gray-600': '#5c5c5c',
                'violet': '#b16cea',
                'yellow': '#ffa84b',
                gray: {
                    light: '#666',
                    white: 'rgba(255,255,255,0.7)',
                    extraWhite: 'rgba(255,255,255,0.3)',
                }

            },
            fontSize: {
                '26': '26px',
                '54': '54px',
            },
            boxShadow: {
                line: '1px 0 0 0 rgba(243, 244, 246,0.2)',
                custom: '0 4px 12px 0 rgba(0, 0, 0, 0.12)',
                menu: '12px 12px 50px 0 rgba(0, 0, 0, 0.2)',
            },
            letterSpacing: {
                wide4: '4px',
            },
            gridTemplateColumns: {
                'midLarge': '1fr 1.5fr 1fr',
            },
            backgroundImage: theme => ({
                'input-email': "url('../../assets/images/input_mail.svg')",
                'input-budget': "url('../../assets/images/input_budget.svg')",
            }),
            backgroundPosition: {
                'input-left-center': '4% center',
            },
            backgroundSize: {
                '18': '18px',
            }
        },


    },
    variants: {
        extend: {},
    },
    plugins: [],
}