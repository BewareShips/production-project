import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line func-names
const AboutPage:FC = function () {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
