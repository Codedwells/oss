import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <>
                <img
                    src='/zenetra_logo.png'
                    alt='Zenetra Labs'
                    className='h-8 w-auto'
                />
                Zenetra Labs
            </>
        )
    },
    links: [
        {
            text: 'Docs',
            url: '/docs',
            active: 'nested-url'
        }
    ]
}
