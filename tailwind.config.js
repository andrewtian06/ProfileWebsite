/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0rem',
      },
    },
    backgroundImage: {
      projectcards:
        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.57) 100%), #CBD5E1',
    },
    screens: {
      sm: '600px',
      md: '768px',
      lg: '992px',
      xl: '1140px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      primary: {
        700: '#14213D',
        900: '#0F172A',
        300: '#CBD5E1',
        50: '#F8FAFC',
      },
      secondary: {
        700: '#FCA311',
      },
      blue: {
        500: '#3B82F6',
      },
      gray: {
        300: '#F9FAFB',
        700: '#3F3F46',
      },
    },
    boxShadow: {
      navbar: '0px 2px 4px rgba(0, 0, 0, 0.025)',
      xs: '0px 9px 11px rgba(0, 117, 255, 0.09)',
      sm: '0px 23px 24px rgba(0, 117, 255, 0.05)',
      md: '0px 24px 23px rgba(0, 0, 0, 0.03)',
      lg: '0px 29px 71px rgba(0, 117, 255, 0.09)',
      xl: '0px 33px 24px rgba(0, 117, 255, 0.09)',
    },
    fontFamily: {
      poppins: ["'Poppins'", 'sans-serif'],
    },
    fontSize: {
      xs: [
        '11px',
        {
          lineHeight: '17px',
        },
      ],
      sm: [
        '13px',
        {
          lineHeight: '20px',
        },
      ],
      md: [
        '14px',
        {
          lineHeight: '21px',
        },
      ],
      lg: [
        '15px',
        {
          lineHeight: '23px',
        },
      ],
      xl: [
        '16px',
        {
          lineHeight: '24px',
        },
      ],
      '2xl': [
        '18px',
        {
          lineHeight: '27px',
        },
      ],
      '3xl': [
        '20px',
        {
          lineHeight: '30px',
        },
      ],
      '4xl': [
        '24px',
        {
          lineHeight: '36px',
        },
      ],
      '5xl': [
        '30px',
        {
          lineHeight: '45px',
        },
      ],
      '6xl': [
        '31px',
        {
          lineHeight: '46px',
        },
      ],
      '7xl': [
        '36px',
        {
          lineHeight: '54px',
        },
      ],
      '8xl': [
        '48px',
        {
          lineHeight: '48px',
        },
      ],
      '9xl': [
        '64px',
        {
          lineHeight: '96px',
        },
      ],
      '10xl': [
        '86px',
        {
          lineHeight: '85px',
        },
      ],
    },
  },
  plugins: [],
};
