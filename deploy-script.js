var ghpages = require('gh-pages');

console.log('ghpages is ', ghpages);

ghpages.publish('dist', {
    branch: 'master',
    repo: 'https://github.com/ankithkumar/react-image-search'
  }, function(err) {
      console.log('complete!! ', err)
  });