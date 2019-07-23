import React from 'react';
import classnames from 'classnames';

const footerNav = [
  {
    title: 'ZANO.ORG',
    links: [
      { title: 'Main website',      link: 'https://zano.org'                                              },
      { title: 'Coinswap',          link: 'https://coinswap.zano.org'                                     },
      { title: 'Marketplace',       link: '#',                                            disabled: true  }
    ]
  },
  {
    title: 'ABOUT',
    links: [
      { title: 'Blog',              link: 'https://medium.com/@zano_project'                              },
      { title: 'Team',              link: 'https://zano.org/team.html'                                    },
      { title: 'Contacts',          link: '#',                                            disabled: true  }
    ]
  },
  {
    title: 'RESOURCES',
    links: [
      { title: 'Downloads',         link: 'https://zano.org/downloads.html'                               },
      { title: 'Roadmap',           link: 'https://zano.org/roadmap.html'                                 },
      { title: 'Documentation',     link: 'https://docs.zano.org/',                                       },
      { title: 'Explorer',          link: 'https://explorer.zano.org/',                                   },
      { title: 'Specifications',    link: 'https://docs.zano.org/docs/specifications',                    }
    ]
  },
  {
    title: 'LEGAL',
    links: [
      { title: 'Terms of use',      link: 'https://zano.org/terms-of-use.html',                           },
      { title: 'Privacy Policy',    link: 'https://zano.org/privacy-policy.html',                         },
      { title: 'Cookie Policy',     link: 'https://zano.org/cookie-policy.html',                          }

    ]
  }
];

export const FooterNav = () => (
  <div className='footer-nav'>
    {footerNav.map((section, index) => (
      <div className='footer-nav__section' key={`f-s-${index}`}>
        <h4 className='footer-nav__title'>{section.title}</h4>
        <ul className='footer-nav__list'>
          {section.links.map((link, index) => (
            <li className='footer-nav__el' key={`f-el-${index}`}>
              <a className={classnames('footer-nav__link navigation__link', { 'disabled': link.disabled })} href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default FooterNav;
