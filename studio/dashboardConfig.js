export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe05f5c238605d84779077d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-xsopk3bo',
                  apiId: '510c793b-3829-40ef-a124-8286debce6bb'
                },
                {
                  buildHookId: '5fe05f5c74ff48dcfea5d800',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web-3inp671c',
                  apiId: 'e18d2bad-995b-48f7-9658-42c134e435a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oudombun/sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-web-3inp671c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
