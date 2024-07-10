import { useTranslation } from 'react-i18next';
import { ParseKeys } from 'i18next';
import { useCallback } from 'react';

export const useFilterTranslation = () => {
    const { t } = useTranslation();

    const translateFilters = useCallback(
        (filters) => filters.map(({ title, ...filter }) => ({ title: t(title), ...filter })),
        [t],
    );

    return { translateFilters };
};
