
if (!localStorage['templateData']) {
  localStorage['templateData'] = JSON.stringify({
    header_image_url: 'https://gallery.mailchimp.com/02e8ae2d0add98d18f17fe0c2/images/04aec4e6-ada2-4cb4-ac5e-3a51d078d262.jpg',
    intro: `The jasmine is blooming, the days are getting longer and the collective sigh of hayfever sufferers grows louder. Indeed, the lovely season of spring is upon us, ready to lighten moods and jacket thickness.

Did you have a nice winter?

The Inspire9 newsletter took a little sabbatical but the community itself powered away on projects. New faces joined us, many teams celebrated successes and our members got together to break bread and toast these successes at a number of memorable social events.

So - to the highlights then?

- Rome2Rio hit 320,000 daily visits and celebrated with a delicious cake from Gelato Messina.
- CareMonkey were nominated for a ANZIA Award - good luck team!
- The 2015 Angelcube teams were announced.
- The Inspire9 team expanded. We welcomed Meegan Jia-Good and oh boy has she made Friday Night Drinks an occasion! You should come by one Friday and see what we mean.
- Pot Luck continued to bring our members to the communal table. Check out our facebook page for photos.
- On August 20 we held Triviatastic 2015. Rum punch cocktails, juggling and a good old-fashioned battle of brains. Check out our facebook page for photos.

We are so excited about what spring will bring. We hope you are too. Here's to building great things together.`,
    article: {
      title: 'The Cultural Architect',
      body: `**The new world of work organisations will require a new breed of worker.**

As new challenges emerge so do fresh opportunities for never before seen roles.

These roles will require skills, behaviours and mindsets that have previously been laughed or locked out of the boardroom.

These roles will predominantly be filled by people who have ignored, avoided or *survived* the corporate conditioning.

People who have reawakened their creativity, who are driven by a deeper purpose and are seeking meaningful ways to channel their unique essence.

Companies would do well to start exploring the idea of what these roles might look like. And who might fill them.

One such example is below. May I introduce an emerging role in the modern business landscape I like to call **The Cultural Architect**.`,
      url: 'http://www.mykeldixon.com/blog/2015/7/23/the-cultural-architect',
      image_url: ''
    },
    first_event: {
      group: 'General Assembly',
      date: '2015-02-12',
      image_url: 'https://dl.dropboxusercontent.com/u/13632257/i9-email/ga.jpg',
      title: 'Achievement Group For Entrepreneurs and Artists',
      body: 'An exciting maiden even from the gang that brought you Trampoline and CSSMelb.',
      url: 'https://generalassemb.ly/education/build-your-brand-with-instagram-a-panel-of-top-instagrammers-industry-experts/melbourne/9835'
    },
    second_event: {
      group: 'Xamarin',
      date: '2015-02-16',
      image_url: 'https://dl.dropboxusercontent.com/u/13632257/i9-email/xamarin.jpg',
      title: 'Xamarin Meetup',
      body: 'A meetup for like-minded mobile devs to learn, explore and get assistance working with the Xamarin platform on Android, iOS and Windows Phone. ',
      url: 'http://www.meetup.com/Melbourne-Xamarin-Meetup/'
    },
    third_event: {
      group: '',
      date: '',
      image_url: '',
      title: '',
      body: '',
      url: ''
    },
    fourth_event: {
      group: '',
      date: '',
      image_url: '',
      title: '',
      body: '',
      url: ''
    }
  });
};

var app = angular.module('app', []);

app.controller('NewsletterController', function($scope, $http) {

  $scope.data = JSON.parse(localStorage['templateData']);

  setInterval(function() {
    localStorage['templateData'] = JSON.stringify($scope.data);
  }, 3000);

  var template2 = function() {};
  $('#template2-iframe').on('load', function() {
    var template2HTML = $('#template2-iframe')[0].contentWindow.document.documentElement.innerHTML;
    template2HTML = template2HTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    var source2 = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  ${ template2HTML }
  </html>
  `;
    template2 = _.template(source2);
  })

  var template4 = function() {};
  $('#template4-iframe').on('load', function() {
    var template4HTML = $('#template4-iframe')[0].contentWindow.document.documentElement.innerHTML;
    template4HTML = template4HTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    var source4 = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  ${ template4HTML }
  </html>
  `;
    template4 = _.template(source4);
  })

  var templateSimple = function() { return ''; };
  $('#templatesimple-iframe').on('load', function() {
    var templateHTML = $('#templatesimple-iframe')[0].contentWindow.document.documentElement.innerHTML;
    templateHTML = templateHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    var sourceSimple = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  ${ templateHTML }
  </html>
  `;
    templateSimple = _.template(sourceSimple);
  })

  var template = function(data) {
    if (data.article.title.length == 0 && data.first_event.title.length == 0) {
      return templateSimple(data);
    }
    else if (data.third_event.title.length > 0) {
      return template4(data);
    }
    else {
      return template2(data);
    }
  };

  var previewDoc = $('#preview-iframe')[0].contentWindow.document;
  var $code = $('#code-html');

  var updateCode = function() {
    var html = template({
      header_image_url: $scope.data.header_image_url,
      header_image_caption: $scope.data.header_image_caption,
      intro_html: Markdown($scope.data.intro),
      article: {
        image_url: $scope.data.article.image_url,
        image_caption: $scope.data.article.image_caption,
        url: $scope.data.article.url,
        title: $scope.data.article.title,
        body: Markdown($scope.data.article.body)
      },
      first_event: {
        group: $scope.data.first_event.group,
        date: moment($scope.data.first_event.date).format('dddd MMMM D'),
        image_url: $scope.data.first_event.image_url,
        title: $scope.data.first_event.title,
        body: $scope.data.first_event.body,
        url: $scope.data.first_event.url
      },
      second_event: {
        group: $scope.data.second_event.group,
        date: moment($scope.data.second_event.date).format('dddd MMMM D'),
        image_url: $scope.data.second_event.image_url,
        title: $scope.data.second_event.title,
        body: $scope.data.second_event.body,
        url: $scope.data.second_event.url
      },
      third_event: {
        group: $scope.data.third_event.group,
        date: moment($scope.data.third_event.date).format('dddd MMMM D'),
        image_url: $scope.data.third_event.image_url,
        title: $scope.data.third_event.title,
        body: $scope.data.third_event.body,
        url: $scope.data.third_event.url
      },
      fourth_event: {
        group: $scope.data.fourth_event.group,
        date: moment($scope.data.fourth_event.date).format('dddd MMMM D'),
        image_url: $scope.data.fourth_event.image_url,
        title: $scope.data.fourth_event.title,
        body: $scope.data.fourth_event.body,
        url: $scope.data.fourth_event.url
      }
    });
    previewDoc.open();
    previewDoc.write(html);
    previewDoc.close();

    $code.val(html);
  }

  var converter = new showdown.Converter();
  var Markdown = function(content) {
    html = converter.makeHtml(content);
    html = html.replace(/{FIRST_NAME}/g,  '*|FNAME|*');
    html = html.replace(/<p>/g,  '<p style="margin: 0 0 1em;">');
    html = html.replace(/<ul>/g, '<ul style="margin: 0; padding: 0;">');
    html = html.replace(/<li>/g, '<li style="margin: 0 0 8px 13px; padding: 0 0 0 10px;">');
    html = html.replace(/<a href="/g, '<a style="color: #ff525e" target="_blank" href="');

    return html;
  }

  updateCode();

  $('.nav-tabs a').click(function() {
    updateCode();
  })

});
