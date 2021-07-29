// module.exports = {
//     webpack: cfg => {
//         cfg.module.rules.push({
//             test: /\.md$/,
//             loader: 'frontmatter-markdown-loader',
//             options: { mode: ['react-component'] },
//         });
//         return cfg;
//     },
// };

const fs = require('fs');
const blogPostsFolder = './content/workPosts';

const getPathsForPosts = () => {
    return fs
        .readdirSync(blogPostsFolder)
        .map(blogName => {
            const trimmedName = blogName.substring(0, blogName.length - 3);
            return {
                [`/work/${trimmedName}`]: {
                    page: '/work/[slug]',
                    query: {
                        slug: trimmedName,
                    },
                },
            };
        })
        .reduce((acc, curr) => {
            return { ...acc, ...curr };
        }, {});
};

module.exports = {
    webpack: configuration => {
        configuration.module.rules.push({
            test: /\.md$/,
            use: 'frontmatter-markdown-loader',
        });
        return configuration;
    },
    async exportPathMap(defaultPathMap) {
        return {
            ...defaultPathMap,
            ...getPathsForPosts(),
        };
    },
};
