const fs = require('fs');
const workPostsFolder = './content/workPosts';

const getPathsForPosts = () => {
    return fs
        .readdirSync(workPostsFolder)
        .map(workName => {
            const trimmedName = workName.substring(0, workName.length - 3);
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
            loader: 'frontmatter-markdown-loader',
        });
        return configuration;
    },
};
