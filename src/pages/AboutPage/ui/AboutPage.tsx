import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

// eslint-disable-next-line func-names
const AboutPage:FC = function () {
    const { t } = useTranslation('about');
    const [value, setValue] = useState('');
    const onChange = (val:string) => {
        setValue(val);
    };
    return (
        <div>
            {t('О сайте')}
            <Input value={value} onChange={onChange} placeholder="Введите текст" />
        </div>
    );
};

export default AboutPage;
