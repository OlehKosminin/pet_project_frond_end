const styles = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    height: { mobile: '239px', tablet: '275px', desktop: '287px' },
    width: { mobile: '280px', tablet: '336px', desktop: '394px' },
    p: '16px',
    borderRadius: '40px',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '27px',
    color: 'primary',
    textDecoration: 'none',
    mb: '16px',
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: '#3291e9;',
    },
  },
  relative: {
    position: 'relative',
  },
  box: {
    display: 'flex',
    gap: '12px',
  },
  boxGroup: {
    mb: { mobile: '12px', tablet: '16px', desktop: '12px' },
    lineHeight: 0,
  },
  subtitle: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: { mobile: '12px', tablet: '14px', desktop: '16px' },
    lineHeight: { mobile: '16px', tablet: '19px', desktop: '22px' },
    color: 'primary',
    textDecoration: 'none',
    m: 0,
  },
  text: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: { mobile: '12px', tablet: '14px', desktop: '16px' },
    lineHeight: { mobile: '16px', tablet: '19px', desktop: '22px' },
    color: 'inherit',
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: 'text.secondary',
    },
    textDecoration: 'none',
    m: 0,
  },
  img: {
    maxWidth: { mobile: '100px', tablet: '110px', desktop: '150px' },
  },
  popBox: {
    position: 'absolute',
    top: { mobile: '32px', tablet: '40px', desktop: '48px' },
    display: 'flex',
    justifyContent: 'space-between',
    width: '120px',
    bgcolor: 'white',
    border: '1px solid #54ADFF',
    boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    borderRadius: '8px',
    p: '12px',
    pb: { mobile: '9px', tablet: '8px', desktop: '8px' },
  },
  textPop: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: { mobile: '12px', tablet: '12px', desktop: '12px' },
    lineHeight: { mobile: '14px', tablet: '16px', desktop: '16px' },
    color: 'inherit',
    textDecoration: 'none',
    m: 0,
    mb: { mobile: '3px', tablet: '4px', desktop: '4px' },
  },
};

export default styles;