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

eval("wp.domReady(function () {\n  wp.blocks.unregisterBlockStyle('core/image', 'default');\n  wp.blocks.unregisterBlockStyle('core/image', 'rounded');\n  wp.blocks.unregisterBlockStyle('core/buttons', 'default');\n  wp.blocks.unregisterBlockStyle('core/buttons', 'outline');\n  wp.blocks.unregisterBlockStyle('core/buttons', 'squared');\n  wp.blocks.unregisterBlockStyle('core/buttons', 'fill');\n\n  /*** LAYOUTS ***/\n  wp.blocks.registerBlockStyle('core/group', {\n    name: 'image-shadow',\n    label: 'Image Shadow'\n  });\n  wp.blocks.registerBlockStyle('core/group', {\n    name: 'section',\n    label: 'Section'\n  });\n  wp.blocks.registerBlockStyle('core/columns', {\n    name: 'section',\n    label: 'Section'\n  });\n\n  /*** Lists **/\n  wp.blocks.registerBlockStyle('core/list', {\n    name: 'highlights',\n    label: 'Highlights'\n  });\n  wp.blocks.registerBlockStyle('core/list', {\n    name: 'check',\n    label: 'Check'\n  });\n  wp.blocks.registerBlockStyle('core/columns', {\n    name: 'reverse',\n    label: 'Reverse Columns on Mobile'\n  });\n  wp.blocks.registerBlockStyle('core/columns', {\n    name: 'overlap-content',\n    label: 'Overlap Content'\n  });\n\n  /*** Buttons ***/\n  wp.blocks.registerBlockStyle('core/button', {\n    name: 'btn-primary',\n    label: 'Primary'\n  });\n  wp.blocks.registerBlockStyle('core/button', {\n    name: 'btn-secondary',\n    label: 'Secondary'\n  });\n\n  //wp.blocks.unregisterBlockType('core/media-text');\n\n  /*** Common Blocks ***/\n  //wp.blocks.unregisterBlockType('core/paragraph');\n  //wp.blocks.unregisterBlockType('core/image');\n  //wp.blocks.unregisterBlockType('core/heading');\n  //wp.blocks.unregisterBlockType('core/gallery');\n  //wp.blocks.unregisterBlockType('core/list');\n  //wp.blocks.unregisterBlockType('core/quote');\n  wp.blocks.unregisterBlockType('core/audio');\n  //wp.blocks.unregisterBlockType('core/cover');\n  //wp.blocks.unregisterBlockType('core/file');\n  //wp.blocks.unregisterBlockType('core/video');\n\n  /*** Formatting ***/\n  wp.blocks.unregisterBlockType('core/code');\n  //wp.blocks.unregisterBlockType('core/classic');\n  //wp.blocks.unregisterBlockType('core/html');\n  wp.blocks.unregisterBlockType('core/preformatted');\n  wp.blocks.unregisterBlockType('core/pullquote');\n  wp.blocks.unregisterBlockType('core/table');\n  wp.blocks.unregisterBlockType('core/verse');\n\n  /*** Layout Elements ***/\n  wp.blocks.unregisterBlockType('core/nextpage');\n  //wp.blocks.unregisterBlockType('core/spacer');\n  //wp.blocks.unregisterBlockType('core/buttons');\n  //wp.blocks.unregisterBlockType('core/columns');\n  //wp.blocks.unregisterBlockType('core/group');\n  //wp.blocks.unregisterBlockType('core/media-text');\n  wp.blocks.unregisterBlockType('core/more');\n  //wp.blocks.unregisterBlockType('core/reusable'); TODO: Wiederverwendbaren Block testen\n  //wp.blocks.unregisterBlockType('core/separator');\n\n  /*** Theme Blocks ***/\n  //wp.blocks.unregisterBlockType('core/site-logo');\n  wp.blocks.unregisterBlockType('core/site-tagline');\n  wp.blocks.unregisterBlockType('core/site-title');\n  wp.blocks.unregisterBlockType('core/query');\n  wp.blocks.unregisterBlockType('core/post-title');\n  wp.blocks.unregisterBlockType('core/post-content');\n  wp.blocks.unregisterBlockType('core/post-date');\n  wp.blocks.unregisterBlockType('core/post-excerpt');\n  wp.blocks.unregisterBlockType('core/post-featured-image');\n  wp.blocks.unregisterBlockType('core/post-terms');\n  //wp.blocks.unregisterBlockType('core/post-archivetitle'); TODO: find correct name\n  wp.blocks.unregisterBlockType('core/loginout');\n  wp.blocks.unregisterBlockType('core/page-list');\n\n  /*** Widgets ***/\n  //wp.blocks.unregisterBlockType('core/shortcode');\n  wp.blocks.unregisterBlockType('core/archives');\n  wp.blocks.unregisterBlockType('core/calendar');\n  wp.blocks.unregisterBlockType('core/categories');\n  wp.blocks.unregisterBlockType('core/latest-comments');\n  wp.blocks.unregisterBlockType('core/latest-posts');\n  wp.blocks.unregisterBlockType('core/rss');\n  wp.blocks.unregisterBlockType('core/search');\n  wp.blocks.unregisterBlockType('core/social-links');\n  wp.blocks.unregisterBlockType('core/tag-cloud');\n\n  /*** Embeds ***/\n  //wp.blocks.unregisterBlockVariation('core/embed', 'youtube');\n  wp.blocks.unregisterBlockVariation('core/embed', 'amazon-kindle');\n  wp.blocks.unregisterBlockVariation('core/embed', 'animoto');\n  wp.blocks.unregisterBlockVariation('core/embed', 'cloudup');\n  wp.blocks.unregisterBlockVariation('core/embed', 'crowdsignal');\n  wp.blocks.unregisterBlockVariation('core/embed', 'dailymotion');\n  wp.blocks.unregisterBlockVariation('core/embed', 'flickr');\n  wp.blocks.unregisterBlockVariation('core/embed', 'imgur');\n  wp.blocks.unregisterBlockVariation('core/embed', 'issuu');\n  wp.blocks.unregisterBlockVariation('core/embed', 'kickstarter');\n  wp.blocks.unregisterBlockVariation('core/embed', 'meetup-com');\n  wp.blocks.unregisterBlockVariation('core/embed', 'mixcloud');\n  wp.blocks.unregisterBlockVariation('core/embed', 'reddit');\n  wp.blocks.unregisterBlockVariation('core/embed', 'reverbnation');\n  wp.blocks.unregisterBlockVariation('core/embed', 'screencast');\n  wp.blocks.unregisterBlockVariation('core/embed', 'scribd');\n  wp.blocks.unregisterBlockVariation('core/embed', 'slideshare');\n  wp.blocks.unregisterBlockVariation('core/embed', 'smugmug');\n  wp.blocks.unregisterBlockVariation('core/embed', 'soundcloud');\n  wp.blocks.unregisterBlockVariation('core/embed', 'speaker-deck');\n  wp.blocks.unregisterBlockVariation('core/embed', 'spotify');\n  wp.blocks.unregisterBlockVariation('core/embed', 'tiktok');\n  wp.blocks.unregisterBlockVariation('core/embed', 'ted');\n  wp.blocks.unregisterBlockVariation('core/embed', 'twitter');\n  wp.blocks.unregisterBlockVariation('core/embed', 'tumblr');\n  wp.blocks.unregisterBlockVariation('core/embed', 'videopress');\n  wp.blocks.unregisterBlockVariation('core/embed', 'vimeo');\n  wp.blocks.unregisterBlockVariation('core/embed', 'wordpress');\n  wp.blocks.unregisterBlockVariation('core/embed', 'wordpress-tv');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ3cCIsImRvbVJlYWR5IiwiYmxvY2tzIiwidW5yZWdpc3RlckJsb2NrU3R5bGUiLCJyZWdpc3RlckJsb2NrU3R5bGUiLCJuYW1lIiwibGFiZWwiLCJ1bnJlZ2lzdGVyQmxvY2tUeXBlIiwidW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uIl0sInNvdXJjZXMiOlsid2VicGFjazovL2NoZXllbm5lLy4vc3JjL2pzL2VkaXRvci5qcz81ZGEyIl0sInNvdXJjZXNDb250ZW50IjpbIndwLmRvbVJlYWR5KCgpID0+IHtcblxuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9pbWFnZScsICdkZWZhdWx0Jyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2ltYWdlJywgJ3JvdW5kZWQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9ucycsICdkZWZhdWx0Jyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2J1dHRvbnMnLCAnb3V0bGluZScpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9idXR0b25zJywgJ3NxdWFyZWQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9ucycsICdmaWxsJyk7XG5cblxuXG5cblxuICAgIC8qKiogTEFZT1VUUyAqKiovXG4gICAgd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9ncm91cCcsIHtcbiAgICAgICAgbmFtZTogJ2ltYWdlLXNoYWRvdycsXG4gICAgICAgIGxhYmVsOiAnSW1hZ2UgU2hhZG93JyxcbiAgICB9KTtcblxuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvZ3JvdXAnLCB7XG4gICAgICAgIG5hbWU6ICdzZWN0aW9uJyxcbiAgICAgICAgbGFiZWw6ICdTZWN0aW9uJyxcbiAgICB9KTtcblxuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvY29sdW1ucycsIHtcbiAgICAgICAgbmFtZTogJ3NlY3Rpb24nLFxuICAgICAgICBsYWJlbDogJ1NlY3Rpb24nLFxuICAgIH0pO1xuXG5cbiAgICAvKioqIExpc3RzICoqL1xuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvbGlzdCcsIHtcbiAgICAgICAgbmFtZTogJ2hpZ2hsaWdodHMnLFxuICAgICAgICBsYWJlbDogJ0hpZ2hsaWdodHMnLFxuICAgIH0pO1xuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvbGlzdCcsIHtcbiAgICAgICAgbmFtZTogJ2NoZWNrJyxcbiAgICAgICAgbGFiZWw6ICdDaGVjaycsXG4gICAgfSk7XG5cbiAgICB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2NvbHVtbnMnLCB7XG4gICAgICAgIG5hbWU6ICdyZXZlcnNlJyxcbiAgICAgICAgbGFiZWw6ICdSZXZlcnNlIENvbHVtbnMgb24gTW9iaWxlJyxcbiAgICB9KTtcblxuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvY29sdW1ucycsIHtcbiAgICAgICAgbmFtZTogJ292ZXJsYXAtY29udGVudCcsXG4gICAgICAgIGxhYmVsOiAnT3ZlcmxhcCBDb250ZW50JyxcbiAgICB9KTtcblxuXG4gICAgLyoqKiBCdXR0b25zICoqKi9cbiAgICB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2J1dHRvbicsIHtcbiAgICAgICAgbmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICAgICAgbGFiZWw6ICdQcmltYXJ5JyxcbiAgICB9KTtcblxuICAgIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9uJywge1xuICAgICAgICBuYW1lOiAnYnRuLXNlY29uZGFyeScsXG4gICAgICAgIGxhYmVsOiAnU2Vjb25kYXJ5JyxcbiAgICB9KTtcblxuXG5cblxuXG5cblxuXG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9tZWRpYS10ZXh0Jyk7XG5cbiAgICAvKioqIENvbW1vbiBCbG9ja3MgKioqL1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcGFyYWdyYXBoJyk7XG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9pbWFnZScpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvaGVhZGluZycpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvZ2FsbGVyeScpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbGlzdCcpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcXVvdGUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9hdWRpbycpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvY292ZXInKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2ZpbGUnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3ZpZGVvJyk7XG5cbiAgICAvKioqIEZvcm1hdHRpbmcgKioqL1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NvZGUnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NsYXNzaWMnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2h0bWwnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wcmVmb3JtYXR0ZWQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wdWxscXVvdGUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS90YWJsZScpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3ZlcnNlJyk7XG5cbiAgICAvKioqIExheW91dCBFbGVtZW50cyAqKiovXG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbmV4dHBhZ2UnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3NwYWNlcicpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvYnV0dG9ucycpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvY29sdW1ucycpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvZ3JvdXAnKTtcbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL21lZGlhLXRleHQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9tb3JlJyk7XG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9yZXVzYWJsZScpOyBUT0RPOiBXaWVkZXJ2ZXJ3ZW5kYmFyZW4gQmxvY2sgdGVzdGVuXG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9zZXBhcmF0b3InKTtcblxuICAgIC8qKiogVGhlbWUgQmxvY2tzICoqKi9cbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3NpdGUtbG9nbycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3NpdGUtdGFnbGluZScpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3NpdGUtdGl0bGUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9xdWVyeScpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3Bvc3QtdGl0bGUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LWNvbnRlbnQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LWRhdGUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LWV4Y2VycHQnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LWZlYXR1cmVkLWltYWdlJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC10ZXJtcycpO1xuICAgIC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC1hcmNoaXZldGl0bGUnKTsgVE9ETzogZmluZCBjb3JyZWN0IG5hbWVcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9sb2dpbm91dCcpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3BhZ2UtbGlzdCcpO1xuXG4gICAgLyoqKiBXaWRnZXRzICoqKi9cbiAgICAvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3Nob3J0Y29kZScpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2FyY2hpdmVzJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvY2FsZW5kYXInKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9jYXRlZ29yaWVzJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbGF0ZXN0LWNvbW1lbnRzJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbGF0ZXN0LXBvc3RzJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcnNzJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvc2VhcmNoJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvc29jaWFsLWxpbmtzJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvdGFnLWNsb3VkJyk7XG5cbiAgICAvKioqIEVtYmVkcyAqKiovXG4gICAgLy93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3lvdXR1YmUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ2FtYXpvbi1raW5kbGUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ2FuaW1vdG8nKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ2Nsb3VkdXAnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ2Nyb3dkc2lnbmFsJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdkYWlseW1vdGlvbicpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnZmxpY2tyJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdpbWd1cicpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnaXNzdXUnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ2tpY2tzdGFydGVyJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdtZWV0dXAtY29tJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdtaXhjbG91ZCcpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAncmVkZGl0Jyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdyZXZlcmJuYXRpb24nKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3NjcmVlbmNhc3QnKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3NjcmliZCcpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnc2xpZGVzaGFyZScpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnc211Z211ZycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnc291bmRjbG91ZCcpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnc3BlYWtlci1kZWNrJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICdzcG90aWZ5Jyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICd0aWt0b2snKTtcbiAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgJ3RlZCcpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAndHdpdHRlcicpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAndHVtYmxyJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICd2aWRlb3ByZXNzJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICd2aW1lbycpO1xuICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCAnd29yZHByZXNzJyk7XG4gICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsICd3b3JkcHJlc3MtdHYnKTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLFlBQU07RUFFZEQsRUFBRSxDQUFDRSxNQUFNLENBQUNDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7RUFDdkRILEVBQUUsQ0FBQ0UsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDO0VBQ3ZESCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0Msb0JBQW9CLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQztFQUN6REgsRUFBRSxDQUFDRSxNQUFNLENBQUNDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7RUFDekRILEVBQUUsQ0FBQ0UsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO0VBQ3pESCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0Msb0JBQW9CLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQzs7RUFNdEQ7RUFDQUgsRUFBRSxDQUFDRSxNQUFNLENBQUNFLGtCQUFrQixDQUFDLFlBQVksRUFBRTtJQUN2Q0MsSUFBSSxFQUFFLGNBQWM7SUFD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\n//# sourceURL=webpack-internal:///./src/js/editor.js\n");

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