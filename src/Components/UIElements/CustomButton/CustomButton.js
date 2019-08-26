import React from 'react';

import styles from './CustomButton.module.scss';

const CustomButton = ({ children, action, type, icon }) => {
    switch (type) {
        case 'primary':
            return (
                <button
                    className={`${styles['btn']} ${styles['primary']}`}
                    onClick={() => action()}
                ><i className={`fa fa-${icon}`} />{' '}{children}
                </button>
            );
        case 'secondary':
            return (
                <button
                    className={`${styles['btn']} ${styles['secondary']}`}
                    onClick={() => action()}
                ><i className={`fa fa-${icon}`} />{' '}{children}
                </button>
            );
        default:
            return (
                <button
                    className={`${styles['btn']} ${styles['primary']}`}
                    onClick={() => action()}
                ><i className={`fa fa-${icon}`} />{' '}{children}
                </button>
            );
    }
}
export default CustomButton;