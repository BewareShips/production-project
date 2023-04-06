import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
 className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
