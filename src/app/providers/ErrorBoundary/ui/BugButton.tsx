import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
   className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [errorBool, setErrorBool] = useState(false);

    const toThrow = () => setErrorBool(true);

    useEffect(() => {
        if (errorBool) {
            throw new Error('Erros button clicked');
        }
    }, [errorBool]);
    return (
        <Button
            onClick={toThrow}
        >
            Throw error
        </Button>
    );
};
