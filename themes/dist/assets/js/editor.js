/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/editor.js":
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
/***/ (function() {

eval("wp.domReady(function () {\n  wp.blocks.unregisterBlockStyle('core/image', 'default');\n  wp.blocks.unregisterBlockStyle('core/image', 'rounded');\n  wp.blocks.unregisterBlockStyle('core/buttons', 'default');\n  wp.blocks.unregisterBlockStyle('core/buttons', 'outline');\n  wp.blocks.unregisterBlockStyle('core/buttons', 'squared');\n  wp.blocks.unregisterBlockStyle('core/buttons', 'fill');\n\n  /*** LAYOUTS ***/\n  wp.blocks.registerBlockStyle('core/group', {\n    name: 'image-shadow',\n    label: 'Image Shadow'\n  });\n  wp.blocks.registerBlockStyle('core/columns', {\n    name: 'no-spacing',\n    label: 'No Spacing'\n  });\n  wp.blocks.registerBlockStyle('core/group', {\n    name: 'no-spacing',\n    label: 'No Spacing'\n  });\n\n  /*** Lists **/\n  wp.blocks.registerBlockStyle('core/list', {\n    name: 'highlights',\n    label: 'Highlights'\n  });\n  wp.blocks.registerBlockStyle('core/list', {\n    name: 'check',\n    label: 'Check'\n  });\n  wp.blocks.registerBlockStyle('core/columns', {\n    name: 'reverse',\n    label: 'Reverse Columns on Mobile'\n  });\n  wp.blocks.registerBlockStyle('core/columns', {\n    name: 'overlap-content',\n    label: 'Overlap Content'\n  });\n\n  /*** Buttons ***/\n  wp.blocks.registerBlockStyle('core/button', {\n    name: 'btn-primary',\n    label: 'Primary'\n  });\n  wp.blocks.registerBlockStyle('core/button', {\n    name: 'btn-secondary',\n    label: 'Secondary'\n  });\n\n  //wp.blocks.unregisterBlockType('core/media-text');\n\n  /*** Common Blocks ***/\n  //wp.blocks.unregisterBlockType('core/paragraph');\n  //wp.blocks.unregisterBlockType('core/image');\n  //wp.blocks.unregisterBlockType('core/heading');\n  //wp.blocks.unregisterBlockType('core/gallery');\n  //wp.blocks.unregisterBlockType('core/list');\n  //wp.blocks.unregisterBlockType('core/quote');\n  wp.blocks.unregisterBlockType('core/audio');\n  //wp.blocks.unregisterBlockType('core/cover');\n  //wp.blocks.unregisterBlockType('core/file');\n  //wp.blocks.unregisterBlockType('core/video');\n\n  /*** Formatting ***/\n  wp.blocks.unregisterBlockType('core/code');\n  //wp.blocks.unregisterBlockType('core/classic');\n  //wp.blocks.unregisterBlockType('core/html');\n  wp.blocks.unregisterBlockType('core/preformatted');\n  wp.blocks.unregisterBlockType('core/pullquote');\n  wp.blocks.unregisterBlockType('core/table');\n  wp.blocks.unregisterBlockType('core/verse');\n\n  /*** Layout Elements ***/\n  wp.blocks.unregisterBlockType('core/nextpage');\n  //wp.blocks.unregisterBlockType('core/spacer');\n  //wp.blocks.unregisterBlockType('core/buttons');\n  //wp.blocks.unregisterBlockType('core/columns');\n  //wp.blocks.unregisterBlockType('core/group');\n  //wp.blocks.unregisterBlockType('core/media-text');\n  wp.blocks.unregisterBlockType('core/more');\n  //wp.blocks.unregisterBlockType('core/reusable'); TODO: Wiederverwendbaren Block testen\n  //wp.blocks.unregisterBlockType('core/separator');\n\n  /*** Theme Blocks ***/\n  //wp.blocks.unregisterBlockType('core/site-logo');\n  wp.blocks.unregisterBlockType('core/site-tagline');\n  wp.blocks.unregisterBlockType('core/site-title');\n  wp.blocks.unregisterBlockType('core/query');\n  wp.blocks.unregisterBlockType('core/post-title');\n  wp.blocks.unregisterBlockType('core/post-content');\n  wp.blocks.unregisterBlockType('core/post-date');\n  wp.blocks.unregisterBlockType('core/post-excerpt');\n  wp.blocks.unregisterBlockType('core/post-featured-image');\n  wp.blocks.unregisterBlockType('core/post-terms');\n  //wp.blocks.unregisterBlockType('core/post-archivetitle'); TODO: find correct name\n  wp.blocks.unregisterBlockType('core/loginout');\n  wp.blocks.unregisterBlockType('core/page-list');\n\n  /*** Widgets ***/\n  //wp.blocks.unregisterBlockType('core/shortcode');\n  wp.blocks.unregisterBlockType('core/archives');\n  wp.blocks.unregisterBlockType('core/calendar');\n  wp.blocks.unregisterBlockType('core/categories');\n  wp.blocks.unregisterBlockType('core/latest-comments');\n  wp.blocks.unregisterBlockType('core/latest-posts');\n  wp.blocks.unregisterBlockType('core/rss');\n  wp.blocks.unregisterBlockType('core/search');\n  wp.blocks.unregisterBlockType('core/social-links');\n  wp.blocks.unregisterBlockType('core/tag-cloud');\n\n  /*** Embeds ***/\n  //wp.blocks.unregisterBlockVariation('core/embed', 'youtube');\n  wp.blocks.unregisterBlockVariation('core/embed', 'amazon-kindle');\n  wp.blocks.unregisterBlockVariation('core/embed', 'animoto');\n  wp.blocks.unregisterBlockVariation('core/embed', 'cloudup');\n  wp.blocks.unregisterBlockVariation('core/embed', 'crowdsignal');\n  wp.blocks.unregisterBlockVariation('core/embed', 'dailymotion');\n  wp.blocks.unregisterBlockVariation('core/embed', 'flickr');\n  wp.blocks.unregisterBlockVariation('core/embed', 'imgur');\n  wp.blocks.unregisterBlockVariation('core/embed', 'issuu');\n  wp.blocks.unregisterBlockVariation('core/embed', 'kickstarter');\n  wp.blocks.unregisterBlockVariation('core/embed', 'meetup-com');\n  wp.blocks.unregisterBlockVariation('core/embed', 'mixcloud');\n  wp.blocks.unregisterBlockVariation('core/embed', 'reddit');\n  wp.blocks.unregisterBlockVariation('core/embed', 'reverbnation');\n  wp.blocks.unregisterBlockVariation('core/embed', 'screencast');\n  wp.blocks.unregisterBlockVariation('core/embed', 'scribd');\n  wp.blocks.unregisterBlockVariation('core/embed', 'slideshare');\n  wp.blocks.unregisterBlockVariation('core/embed', 'smugmug');\n  wp.blocks.unregisterBlockVariation('core/embed', 'soundcloud');\n  wp.blocks.unregisterBlockVariation('core/embed', 'speaker-deck');\n  wp.blocks.unregisterBlockVariation('core/embed', 'spotify');\n  wp.blocks.unregisterBlockVariation('core/embed', 'tiktok');\n  wp.blocks.unregisterBlockVariation('core/embed', 'ted');\n  wp.blocks.unregisterBlockVariation('core/embed', 'twitter');\n  wp.blocks.unregisterBlockVariation('core/embed', 'tumblr');\n  wp.blocks.unregisterBlockVariation('core/embed', 'videopress');\n  wp.blocks.unregisterBlockVariation('core/embed', 'vimeo');\n  wp.blocks.unregisterBlockVariation('core/embed', 'wordpress');\n  wp.blocks.unregisterBlockVariation('core/embed', 'wordpress-tv');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZWRpdG9yLmpzIiwibmFtZXMiOlsid3AiLCJkb21SZWFkeSIsImJsb2NrcyIsInVucmVnaXN0ZXJCbG9ja1N0eWxlIiwicmVnaXN0ZXJCbG9ja1N0eWxlIiwibmFtZSIsImxhYmVsIiwidW5yZWdpc3RlckJsb2NrVHlwZSIsInVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbiJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hleWVubmUvLi9zcmMvanMvZWRpdG9yLmpzPzVkYTIiXSwic291cmNlc0NvbnRlbnQiOlsid3AuZG9tUmVhZHkoKCkgPT4ge1xuXG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2ltYWdlJywgJ2RlZmF1bHQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvaW1hZ2UnLCAncm91bmRlZCcpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9idXR0b25zJywgJ2RlZmF1bHQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9ucycsICdvdXRsaW5lJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2J1dHRvbnMnLCAnc3F1YXJlZCcpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9idXR0b25zJywgJ2ZpbGwnKTtcblxuXG5cblxuXG4gICAgLyoqKiBMQVlPVVRTICoqKi9cbiAgICB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2dyb3VwJywge1xuICAgICAgICBuYW1lOiAnaW1hZ2Utc2hhZG93JyxcbiAgICAgICAgbGFiZWw6ICdJbWFnZSBTaGFkb3cnLFxuICAgIH0pO1xuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvY29sdW1ucycsIHtcbiAgICAgICAgbmFtZTogJ25vLXNwYWNpbmcnLFxuICAgICAgICBsYWJlbDogJ05vIFNwYWNpbmcnLFxuICAgIH0pO1xuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvZ3JvdXAnLCB7XG4gICAgICAgIG5hbWU6ICduby1zcGFjaW5nJyxcbiAgICAgICAgbGFiZWw6ICdObyBTcGFjaW5nJyxcbiAgICB9KTtcblxuXG5cbiAgICAvKioqIExpc3RzICoqL1xuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvbGlzdCcsIHtcbiAgICAgICAgbmFtZTogJ2hpZ2hsaWdodHMnLFxuICAgICAgICBsYWJlbDogJ0hpZ2hsaWdodHMnLFxuICAgIH0pO1xuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvbGlzdCcsIHtcbiAgICAgICAgbmFtZTogJ2NoZWNrJyxcbiAgICAgICAgbGFiZWw6ICdDaGVjaycsXG4gICAgfSk7XG5cbiAgICB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2NvbHVtbnMnLCB7XG4gICAgICAgIG5hbWU6ICdyZXZlcnNlJyxcbiAgICAgICAgbGFiZWw6ICdSZXZlcnNlIENvbHVtbnMgb24gTW9iaWxlJyxcbiAgICB9KTtcblxuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvY29sdW1ucycsIHtcbiAgICAgICAgbmFtZTogJ292ZXJsYXAtY29udGVudCcsXG4gICAgICAgIGxhYmVsOiAnT3ZlcmxhcCBDb250ZW50JyxcbiAgICB9KTtcblxuXG4gICAgLyoqKiBCdXR0b25zICoqKi9cbiAgICB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2J1dHRvbicsIHtcbiAgICAgICAgbmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICAgICAgbGFiZWw6ICdQcmltYXJ5JyxcbiAgICB9KTtcblxuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9uJywge1xuICAgICAgICBuYW1lOiAnYnRuLXNlY29uZGFyeScsXG4gICAgICAgIGxhYmVsOiAnU2Vjb25kYXJ5JyxcbiAgICB9KTtcblxuXG5cblxuXG5cblxuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbWVkaWEtdGV4dCcpO1xuXG4gICAgLyoqKiBDb21tb24gQmxvY2tzICoqKi9cbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3BhcmFncmFwaCcpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvaW1hZ2UnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2hlYWRpbmcnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2dhbGxlcnknKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2xpc3QnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3F1b3RlJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvYXVkaW8nKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NvdmVyJyk7XG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9maWxlJyk7XG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS92aWRlbycpO1xuXG4gICAgLyoqKiBGb3JtYXR0aW5nICoqKi9cbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9jb2RlJyk7XG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9jbGFzc2ljJyk7XG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9odG1sJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcHJlZm9ybWF0dGVkJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcHVsbHF1b3RlJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvdGFibGUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS92ZXJzZScpO1xuXG4gICAgLyoqKiBMYXlvdXQgRWxlbWVudHMgKioqL1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL25leHRwYWdlJyk7XG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9zcGFjZXInKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2J1dHRvbnMnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NvbHVtbnMnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2dyb3VwJyk7XG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9tZWRpYS10ZXh0Jyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbW9yZScpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcmV1c2FibGUnKTsgVE9ETzogV2llZGVydmVyd2VuZGJhcmVuIEJsb2NrIHRlc3RlblxuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvc2VwYXJhdG9yJyk7XG5cbiAgICAvKioqIFRoZW1lIEJsb2NrcyAqKiovXG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9zaXRlLWxvZ28nKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9zaXRlLXRhZ2xpbmUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9zaXRlLXRpdGxlJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcXVlcnknKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LXRpdGxlJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC1jb250ZW50Jyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC1kYXRlJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC1leGNlcnB0Jyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC1mZWF0dXJlZC1pbWFnZScpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3Bvc3QtdGVybXMnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3Bvc3QtYXJjaGl2ZXRpdGxlJyk7IFRPRE86IGZpbmQgY29ycmVjdCBuYW1lXG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbG9naW5vdXQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wYWdlLWxpc3QnKTtcblxuICAgIC8qKiogV2lkZ2V0cyAqKiovXG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9zaG9ydGNvZGUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9hcmNoaXZlcycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NhbGVuZGFyJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvY2F0ZWdvcmllcycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2xhdGVzdC1jb21tZW50cycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2xhdGVzdC1wb3N0cycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3JzcycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3NlYXJjaCcpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3NvY2lhbC1saW5rcycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3RhZy1jbG91ZCcpO1xuXG4gICAgLyoqKiBFbWJlZHMgKioqL1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICd5b3V0dWJlJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdhbWF6b24ta2luZGxlJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdhbmltb3RvJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdjbG91ZHVwJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdjcm93ZHNpZ25hbCcpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnZGFpbHltb3Rpb24nKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ2ZsaWNrcicpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnaW1ndXInKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ2lzc3V1Jyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdraWNrc3RhcnRlcicpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnbWVldHVwLWNvbScpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnbWl4Y2xvdWQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3JlZGRpdCcpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAncmV2ZXJibmF0aW9uJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdzY3JlZW5jYXN0Jyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdzY3JpYmQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3NsaWRlc2hhcmUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3NtdWdtdWcnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3NvdW5kY2xvdWQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3NwZWFrZXItZGVjaycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnc3BvdGlmeScpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAndGlrdG9rJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICd0ZWQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3R3aXR0ZXInKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3R1bWJscicpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAndmlkZW9wcmVzcycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAndmltZW8nKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3dvcmRwcmVzcycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnd29yZHByZXNzLXR2Jyk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxZQUFNO0VBRWRELEVBQUUsQ0FBQ0UsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDO0VBQ3ZESCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0Msb0JBQW9CLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQztFQUN2REgsRUFBRSxDQUFDRSxNQUFNLENBQUNDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7RUFDekRILEVBQUUsQ0FBQ0UsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO0VBQ3pESCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0Msb0JBQW9CLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQztFQUN6REgsRUFBRSxDQUFDRSxNQUFNLENBQUNDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7O0VBTXREO0VBQ0FILEVBQUUsQ0FBQ0UsTUFBTSxDQUFDRSxrQkFBa0IsQ0FBQyxZQUFZLEVBQUU7SUFDdkNDLElBQUksRUFBRSxjQUFjO0lBQ3BCQyxLQUFLLEVBQUU7RUFDWCxDQUFDLENBQUM7RUFDRk4sRUFBRSxDQUFDRSxNQUFNLENBQUNFLGtCQUFrQixDQUFDLGNBQWMsRUFBRTtJQUN6Q0MsSUFBSSxFQUFFLFlBQVk7SUFDbEJDLEtBQUssRUFBRTtFQUNYLENBQUMsQ0FBQztFQUNGTixFQUFFLENBQUNFLE1BQU0sQ0FBQ0Usa0JBQWtCLENBQUMsWUFBWSxFQUFFO0lBQ3ZDQyxJQUFJLEVBQUUsWUFBWTtJQUNsQkMsS0FBSyxFQUFFO0VBQ1gsQ0FBQyxDQUFDOztFQUlGO0VBQ0FOLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDRSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7SUFDdENDLElBQUksRUFBRSxZQUFZO0lBQ2xCQyxLQUFLLEVBQUU7RUFDWCxDQUFDLENBQUM7RUFDRk4sRUFBRSxDQUFDRSxNQUFNLENBQUNFLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtJQUN0Q0MsSUFBSSxFQUFFLE9BQU87SUFDYkMsS0FBSyxFQUFFO0VBQ1gsQ0FBQyxDQUFDO0VBRUZOLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDRSxrQkFBa0IsQ0FBQyxjQUFjLEVBQUU7SUFDekNDLElBQUksRUFBRSxTQUFTO0lBQ2ZDLEtBQUssRUFBRTtFQUNYLENBQUMsQ0FBQztFQUVGTixFQUFFLENBQUNFLE1BQU0sQ0FBQ0Usa0JBQWtCLENBQUMsY0FBYyxFQUFFO0lBQ3pDQyxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCQyxLQUFLLEVBQUU7RUFDWCxDQUFDLENBQUM7O0VBR0Y7RUFDQU4sRUFBRSxDQUFDRSxNQUFNLENBQUNFLGtCQUFrQixDQUFDLGFBQWEsRUFBRTtJQUN4Q0MsSUFBSSxFQUFFLGFBQWE7SUFDbkJDLEtBQUssRUFBRTtFQUNYLENBQUMsQ0FBQztFQUVGTixFQUFFLENBQUNFLE1BQU0sQ0FBQ0Usa0JBQWtCLENBQUMsYUFBYSxFQUFFO0lBQ3hDQyxJQUFJLEVBQUUsZUFBZTtJQUNyQkMsS0FBSyxFQUFFO0VBQ1gsQ0FBQyxDQUFDOztFQVFGOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FOLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxZQUFZLENBQUM7RUFDM0M7RUFDQTtFQUNBOztFQUVBO0VBQ0FQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7RUFDMUM7RUFDQTtFQUNBUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsbUJBQW1CLENBQUM7RUFDbERQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQztFQUMvQ1AsRUFBRSxDQUFDRSxNQUFNLENBQUNLLG1CQUFtQixDQUFDLFlBQVksQ0FBQztFQUMzQ1AsRUFBRSxDQUFDRSxNQUFNLENBQUNLLG1CQUFtQixDQUFDLFlBQVksQ0FBQzs7RUFFM0M7RUFDQVAsRUFBRSxDQUFDRSxNQUFNLENBQUNLLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztFQUM5QztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7RUFDMUM7RUFDQTs7RUFFQTtFQUNBO0VBQ0FQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztFQUNsRFAsRUFBRSxDQUFDRSxNQUFNLENBQUNLLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDO0VBQ2hEUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsWUFBWSxDQUFDO0VBQzNDUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsaUJBQWlCLENBQUM7RUFDaERQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztFQUNsRFAsRUFBRSxDQUFDRSxNQUFNLENBQUNLLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0VBQy9DUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsbUJBQW1CLENBQUM7RUFDbERQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQztFQUN6RFAsRUFBRSxDQUFDRSxNQUFNLENBQUNLLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDO0VBQ2hEO0VBQ0FQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7RUFDOUNQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQzs7RUFFL0M7RUFDQTtFQUNBUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsZUFBZSxDQUFDO0VBQzlDUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsZUFBZSxDQUFDO0VBQzlDUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsaUJBQWlCLENBQUM7RUFDaERQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQztFQUNyRFAsRUFBRSxDQUFDRSxNQUFNLENBQUNLLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDO0VBQ2xEUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsVUFBVSxDQUFDO0VBQ3pDUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsYUFBYSxDQUFDO0VBQzVDUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsbUJBQW1CLENBQUM7RUFDbERQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQzs7RUFFL0M7RUFDQTtFQUNBUCxFQUFFLENBQUNFLE1BQU0sQ0FBQ00sd0JBQXdCLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztFQUNqRVIsRUFBRSxDQUFDRSxNQUFNLENBQUNNLHdCQUF3QixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7RUFDM0RSLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDTSx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDO0VBQzNEUixFQUFFLENBQUNFLE1BQU0sQ0FBQ00sd0JBQXdCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztFQUMvRFIsRUFBRSxDQUFDRSxNQUFNLENBQUNNLHdCQUF3QixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7RUFDL0RSLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDTSx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO0VBQzFEUixFQUFFLENBQUNFLE1BQU0sQ0FBQ00sd0JBQXdCLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztFQUN6RFIsRUFBRSxDQUFDRSxNQUFNLENBQUNNLHdCQUF3QixDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7RUFDekRSLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDTSx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO0VBQy9EUixFQUFFLENBQUNFLE1BQU0sQ0FBQ00sd0JBQXdCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztFQUM5RFIsRUFBRSxDQUFDRSxNQUFNLENBQUNNLHdCQUF3QixDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7RUFDNURSLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDTSx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO0VBQzFEUixFQUFFLENBQUNFLE1BQU0sQ0FBQ00sd0JBQXdCLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztFQUNoRVIsRUFBRSxDQUFDRSxNQUFNLENBQUNNLHdCQUF3QixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7RUFDOURSLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDTSx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO0VBQzFEUixFQUFFLENBQUNFLE1BQU0sQ0FBQ00sd0JBQXdCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztFQUM5RFIsRUFBRSxDQUFDRSxNQUFNLENBQUNNLHdCQUF3QixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7RUFDM0RSLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDTSx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO0VBQzlEUixFQUFFLENBQUNFLE1BQU0sQ0FBQ00sd0JBQXdCLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztFQUNoRVIsRUFBRSxDQUFDRSxNQUFNLENBQUNNLHdCQUF3QixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7RUFDM0RSLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDTSx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO0VBQzFEUixFQUFFLENBQUNFLE1BQU0sQ0FBQ00sd0JBQXdCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztFQUN2RFIsRUFBRSxDQUFDRSxNQUFNLENBQUNNLHdCQUF3QixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7RUFDM0RSLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDTSx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO0VBQzFEUixFQUFFLENBQUNFLE1BQU0sQ0FBQ00sd0JBQXdCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztFQUM5RFIsRUFBRSxDQUFDRSxNQUFNLENBQUNNLHdCQUF3QixDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7RUFDekRSLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDTSx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO0VBQzdEUixFQUFFLENBQUNFLE1BQU0sQ0FBQ00sd0JBQXdCLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztBQUNwRSxDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/js/editor.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/editor.js"]();
/******/ 	
/******/ })()
;