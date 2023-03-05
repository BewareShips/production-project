import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import cls from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const { t } = useTranslation();
    const onToogleData = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onToogleData}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={classNames(cls.links)}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                dolore explicabo neque voluptatum atque porro fugit quasi illum odit
                suscipit blanditiis dolores soluta, quisquam exercitationem
                quibusdam mollitia ipsam, impedit velit?
            </Modal>
        </div>
    );
};
