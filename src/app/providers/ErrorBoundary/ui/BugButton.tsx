import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
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
