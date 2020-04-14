import Typography from "typography"

const typography = new Typography({
  baseFontSize: `18px`,
  baseLineHeight: `1.45`,
  headerFontFamily: ['Open Sans', 'Segoe UI', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'Segoe UI', 'sans-serif'], 
})

export const { scale, rhythm, options } = typography
export default typography