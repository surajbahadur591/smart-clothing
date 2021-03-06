import React from 'react'


import './custom-button.styles.scss'

const CustomButton =({children, isGoogleSignIn, ...otherProps}) => {

    return (
<button className={isGoogleSignIn ? 'google' : 'custom-button'} {...otherProps}>
    {children}
</button>
    )
    
}

export default CustomButton;