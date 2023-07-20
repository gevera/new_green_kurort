# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


/* Основные */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 20px;

position: absolute;
width: 820px;
height: 100px;
left: 0px;
top: 249px;



/* Rectangle 5 */

width: 100px;
height: 100px;

/* Text/Black

для текста
*/
background: #323232;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Rectangle 6 */

box-sizing: border-box;

width: 100px;
height: 100px;

/* Text/Gray 1

для наборного текста
*/
background: #878787;
border: 1px solid rgba(0, 0, 0, 0.2);

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Rectangle 8 */

box-sizing: border-box;

width: 100px;
height: 100px;

/* Text/Gray 2

для текста
*/
background: #B1B1B1;
border: 1px solid rgba(0, 0, 0, 0.2);

/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Rectangle 7 */

box-sizing: border-box;

width: 100px;
height: 100px;

/* Text/White

для текста
*/
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.2);

/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;


/* Rectangle 9 */

box-sizing: border-box;

width: 100px;
height: 100px;

/* Fill/Green

для заливки форм
*/
background: #329831;
border: 1px solid rgba(0, 0, 0, 0.2);

/* Inside auto layout */
flex: none;
order: 4;
flex-grow: 0;


/* Rectangle 10 */

box-sizing: border-box;

width: 100px;
height: 100px;

/* Fill/Green 70%

для заливки форм/ховеры
*/
background: rgba(50, 152, 49, 0.7);
border: 1px solid rgba(0, 0, 0, 0.2);

/* Inside auto layout */
flex: none;
order: 5;
flex-grow: 0;


/* Rectangle 12 */

box-sizing: border-box;

width: 100px;
height: 100px;

/* Fill/Black 10%

для заливки форм/разделителей
*/
background: rgba(0, 0, 0, 0.1);
border: 1px solid rgba(0, 0, 0, 0.2);

/* Inside auto layout */
flex: none;
order: 6;
flex-grow: 0;
