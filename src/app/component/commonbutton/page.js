"use client"
import React from 'react'

export default function CommonButton({ onClick, buttonText, type, disabled }) {
    return (
        <>
            <button
                type={type || "submit"}
                onClick={onClick || null}
                disabled={disabled || false}
                className='button-class'
                >
                {buttonText}
            </button>
        </>
    )
}
 
1