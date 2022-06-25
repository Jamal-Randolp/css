import React from 'react'
import clsx from 'clsx'
import {MarkGithubIcon, SearchIcon, TerminalIcon, BellIcon, PlusIcon, InboxIcon} from '@primer/octicons-react'
//import { FlashTemplate } from '../Alerts/Flash.stories'

export default {
  title: 'Components/App/AppHeader',
  parameters: {
    layout: 'fullscreen'
  },
  excludeStories: ['AppHeaderTemplate'],
  argTypes: {

    notificationsHasIndicator: {
      control: 'boolean',
    },

    userHasIndicator: {
      control: 'boolean',
    },

    context: {
      control: {
        type: 'object',
      }
    },

    localBarChildren: {
      control: 'text',
    }

  },
}

export const AppHeaderTemplate = ({
  notificationsHasIndicator,
  userHasIndicator,
  context,
  localBarChildren,
}) => {

  // Default values
  notificationsHasIndicator = notificationsHasIndicator ?? false;
  userHasIndicator = userHasIndicator ?? false;
  context = context ?? [
    {url: '/primer', label: 'primer'},
    {url: '/primer/components', label: 'components'},
  ];

  return (
    <>
      <header className={clsx('AppHeader')}>

        {/*
          * AppHeader-globalBar
          * -----------------
          * The GitHub global bar contains the logo and user avatar, with
          * contextual navigation + actions
          */}
        <div className={clsx('AppHeader-globalBar')}>

          <div className={clsx('AppHeader-globalBar-start')}>
            {/*
              * AppHeader-logo
              * -----------------
              * The GitHub interactive logo region
              */}
            <div className="AppHeader-logo">
              {/*
                * The button element can be focusable. Click event opens side sheet
                * with main global menu. A direct link to the GitHub homepage is
                * available before the global header, in the AppFrame component.
                * */}
              <button aria-expanded="false" aria-haspopup="dialog" aria-label="Open main menu">
                {/*
                  * Replace with ViewComponent:
                  * <%= render(Primer::OcticonComponent.new(:"mark-github")) %>
                  */}
                <MarkGithubIcon />
              </button>

              {/*
                * The anchor element is not focusable, yet handles mouse pointer
                * events such as ctrl+click, middle click, right-click, for users to
                * handle the homepage URL when interacting with the website logo as
                * they're used to.
                * 
                * See https://codepen.io/team/GitHub/pen/OJQgyqo for interactive
                * example including the expected `mouseup` event listener.
                */}
              <a href="/" tabindex="-1" aria-hidden>GitHub homepage</a>
            </div>

            {/*
              * AppHeader-context
              * -----------------
              * Required region right after the GitHub logo. May be a breadcrumb or
              * page title, placed left-aligned.
              */}
            <div className="AppHeader-context">
              <div className="AppHeader-context-compact">
                <button className="AppHeader-context-compact-trigger" aria-label="Todo: mobile context region trigger label" aria-expanded="false" aria-haspopup="true">
                  {/* 
                    * For one-level context regions:
                    * <strong className="AppHeader-context-compact-mainItem">username</strong>
                    * 
                    * For two-level context regions:
                    * <span className="AppHeader-context-compact-lead">
                    *   <span className="AppHeader-context-compact-parentItem">owner</span>
                    *   <span className="AppHeader-context-compact-separator">&nbsp;/</span>
                    * </span>
                    * <strong className="AppHeader-context-compact-mainItem">repository</strong>
                    * 
                    * For three-level context regions:
                    * <span className="AppHeader-context-compact-lead">
                    *   <span className="AppHeader-context-compact-parentItem">orgName</span>
                    *   <span className="AppHeader-context-compact-separator">&nbsp;/&nbsp;</span>
                    *   <span className="AppHeader-context-compact-parentItem">Projects</span>
                    *   <span className="AppHeader-context-compact-separator">&nbsp;/</span>
                    * </span>
                    * <strong className="AppHeader-context-compact-mainItem">ProjectTitle</strong>
                    * 
                    * For even deeper context regions:
                    * <span className="AppHeader-context-compact-lead">
                    *   <span className="AppHeader-context-compact-parentItem">orgName</span>
                    *   <span className="AppHeader-context-compact-separator">&nbsp;/&nbsp;</span>
                    *   <span className="AppHeader-context-compact-parentItem">Teams / &hellip;</span>
                    *   <span className="AppHeader-context-compact-separator">&nbsp;/</span>
                    * </span>
                    * <strong className="AppHeader-context-compact-mainItem">TeamName</strong>
                    * 
                    */}
                  <span className="AppHeader-context-compact-lead">
                    <span className="AppHeader-context-compact-parentItem">owner</span>
                    <span className="AppHeader-context-compact-separator">&nbsp;/</span>
                  </span>
                  <strong className="AppHeader-context-compact-mainItem">repository</strong>
                </button>
              </div>
              <div className="AppHeader-context-full">
                <nav aria-label="Context region">
                  <ul>
                    <li><a className="AppHeader-context-item" title="loremipsum..." href="#">owner</a></li>
                    <li><a className="AppHeader-context-item" title="loremipsum..." href="#">repository</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className={clsx('AppHeader-globalBar-end')}>

            {/*
              * AppHeader-search
              * -----------------
              * This region shows a search input on regular viewports, and search
              * button on narrow viewports.
              */}
            <div className="AppHeader-search">
              {/* Narrow viewport-specific search button */}
              <button className={clsx('AppHeader-button', 'AppHeader-search-whenNarrow')} aria-label="Search or jump to...">
                {/*
                  * Replace with ViewComponent:
                  * <%= render(Primer::OcticonComponent.new(:"search")) %>
                  */}
                <SearchIcon />
              </button>

              {/* Regular viewport search input */}
              <form className="AppHeader-search-whenRegular">
                
                <div className="AppHeader-search-wrap AppHeader-search-wrap--hasTrailing">
                  {/*
                    * AppHeader-search-wrap needs to have two direct children:
                    * - AppHeader-search-label
                    * - AppHeader-search-control
                    */}
                  <label className="AppHeader-search-label" for="AppHeader-searchInput">Type <kbd>/</kbd> to search</label>
                  <div className="AppHeader-search-control">
                    <span className="AppHeader-search-visual--leading"><SearchIcon /></span>
                    <input name="q" className="form-control input-contrast" id="AppHeader-searchInput" type="search" placeholder="Search or jump to..." />
                  </div>
                  <button className="AppHeader-search-action--trailing">
                  {/*
                    * Replace with ViewComponent:
                    * <%= render(Primer::OcticonComponent.new(:"xxxxx")) %>
                    */}
                    <TerminalIcon />
                  </button>
                </div>
              </form>
            </div>
            
            <div className="AppHeader-actions">
              <a className={clsx('AppHeader-button', notificationsHasIndicator && 'AppHeader-button--hasIndicator')} href="#">
                {/*
                  * Replace with ViewComponent:
                  * <%= render(Primer::OcticonComponent.new(:"inbox")) %>
                  */}
                <InboxIcon />
              </a>
              
              <a className="AppHeader-button" href="#">
                {/*
                  * Replace with ViewComponent:
                  * <%= render(Primer::OcticonComponent.new(:"plus")) %>
                  */}
                <PlusIcon />
              </a>
            </div>

            {/*
              * AppHeader-user
              * --------------
              * Same as the AppHeader-logo structure, with button and anchor
              * elements working together to enable fully accessible interaction
              * with keyboard + mouse
              */}
            <div class="AppHeader-user">
              <button aria-expanded="false" aria-haspopup="dialog" aria-label="Open user menu">
                <img alt="@octocat" src="https://github.com/octocat.png" />
              </button>
              
              <a href="/octocat" tabindex="-1" aria-hidden>octocat profile</a>
            </div>
          </div>
        </div>

        <div className={clsx('AppHeader-localBar')}>
          {localBarChildren}
        </div>
      </header>
    </>
  );
};

export const Playground = AppHeaderTemplate.bind({})

Playground.args = {
  notificationsHasIndicator: true,
  localBarChildren: (
    <>
      <nav aria-label="Default with nav element" data-view-component="true" class="UnderlineNav">
        <ul data-view-component="true" class="UnderlineNav-body list-style-none">
          <li data-view-component="true" class="d-inline-flex">
            <a href="#" aria-current="page" data-view-component="true" class="UnderlineNav-item">Item 1</a>
          </li>
          <li data-view-component="true" class="d-inline-flex">
            <a href="#" data-view-component="true" class="UnderlineNav-item">Item 2</a>
          </li>
        </ul>
      </nav>
    </>
  )
};