export default {
  widgets: [
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
                  buildHookId: '617ee850f3d23bd68323a82c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hxcpfews',
                  apiId: 'ec77dc90-7a76-4691-ad89-34bfbd81e204'
                },
                {
                  buildHookId: '617ee850d8361fede04fcede',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o4bku7wa',
                  apiId: '5d59e65d-7004-4e66-9bad-20a48afee296'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nerdyman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o4bku7wa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
