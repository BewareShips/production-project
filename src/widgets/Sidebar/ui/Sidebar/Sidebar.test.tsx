import { fireEvent, screen } from '@testing-library/react';

import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toogle', () => {
        renderWithTranslations(<Sidebar />);
        const toogleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toogleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
