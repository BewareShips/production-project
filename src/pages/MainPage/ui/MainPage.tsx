import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line func-names
const MainPage:FC = function () {
    const { t } = useTranslation();
    return (
        <div>
            {t('Главная страница')}
            <BugButton />
            <Counter />
        </div>
    );
};

export default MainPage;
