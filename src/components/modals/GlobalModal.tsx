'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Modal from 'react-modal';

import CloseIcon from "@/assets/svgs/cross-icon.svg";
import BackArrow from "@/assets/svgs/back-arow.svg";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    goback?: any;
    title?: string;
    children: any;
    modalHeader?: boolean;
    className?: string;
    overlayStyle?: React.CSSProperties;
};

const GlobalModal = ({
    isOpen,
    onClose,
    goback,
    title,
    children,
    modalHeader = true,
    className,
    overlayStyle
}: Props) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            padding: '0px',
            transform: 'translate(-50%, -50%)',
            border: '2px solid #E9E9E9',
            borderRadius: '10px',
            zIndex: 120,
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.70)',
            zIndex: 110,
            ...overlayStyle,
        },
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            ariaHideApp={false}
        >
            {modalHeader && (
                <div className="p-3 bg-[#F8F8F8] flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-4 1sm:gap-2">
                        {goback && (
                            <Image onClick={goback} src={BackArrow} alt="back-arrow" className="cursor-pointer" />
                        )}
                        <h3 className="text-[#0A96D4] text-[20px] 3sm:text-[18px] 2xs:text-[14px] font-[700] tracking-normal">
                            {title}
                        </h3>
                    </div>
                    <div onClick={onClose} className="border border-[#dadada] hover:bg-gray-200 w-[28px] h-[28px] rounded-md flex items-center justify-center cursor-pointer">
                        <Image src={CloseIcon} alt="close-icon" />
                    </div>
                </div>
            )}
            <div className={`p-4 ${className}`}>
                {children}
            </div>
        </Modal>
    );
};

export default GlobalModal;
