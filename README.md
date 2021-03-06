# ๐ฑJMTZ

- ํผ์๋ง ์๊ณ  ์ถ์ ์กด๋งํฑ ๋ง์ง ๊ธฐ๋ก with Vue, Firebase https://jmtgrr.firebaseapp.com (id: lee@gmail.com / password: asdfasdf)
- ๊ฐ์, ๋ก๊ทธ์ธ(๋ก๊ทธ์์), ๋ง์ดํ์ด์ง, ์กด๋งํฑ์ง ๋ฑ๋ก, ์กด๋งํฑ์ง ๋ฆฌ์คํธ

## ๐ถ๊ฐ๋ฐ ํ๊ฒฝ

- Vue(VueCLI)
- Vuex
- DB : Firebase

## ๐ญ์ค์น ๋ฐฉ๋ฒ

```
npm install
npm run serve
```

## ๐น์ฌ์ฉ ์์ 

![jmttest](https://user-images.githubusercontent.com/20432185/58534832-49806f00-8227-11e9-8ace-4f45e045eefb.gif)

## ๐ฐ์๋ฐ์ดํธ ๋ด์ญ

## ๐บํด์ผ ํ  ์ผ

- ๋ฉํฐ ์ด๋ฏธ์ง ์๋ก๋
- ์ด๋ฏธ์ง ์ฉ๋ ์ต์ ํ
- ์ด๋ฏธ์ง ์ค์์ดํผ ์ ์ฉ
- ํ๊ทธ ํํฐ ๋งํฌ
- ํ์ด์ง์ฒ๋ฆฌ(์ธํผ๋ ์คํฌ๋กค)
- ๋ ์ด์ง ๋ก๋ฉ
- ๊ณต์ ํ๊ธฐ

## ๐ฏ ๋ฌธ์  ํด๊ฒฐ ๋ฐ ํ์ต ๋ด์ฉ

- `rootState` `Vuex` ์ต์์ ์ ์ฒด์์ ์ ๊ทผ ๊ฐ๋ฅ
  - `modeuls`์ `state` ์ ๊ทผํ ๋ ์ฌ์ฉํ ๋ ์ฌ์ฉ

* **Global Before Guards**

  - ์ ์ญ๋ฑ๋ก
  - `beforeEach` : navigation์ด ๋ ๋๋ง๋ค creation order์ ๋ฐ๋ผ ํธ์ถ๋์ด์ง๋ค. ๋น๋๊ธฐ์ด๋ฉฐ ๋ชจ๋  hooks์ด resolved๋๊ธฐ์ ๊น์ง navigation์ pending(๋๊ธฐ)๋๋ค.
  - 3๊ฐ์ ์ธ์๋ฅผ ๋ฐ๋๋ค.(`to, from, next`)
  - `to`: ํ์ฌ ์ด๋ํ (๋์ด์ง) Route
  - `from`: ํ์ฌ Route ์ด๋ํ๊ธฐ์  Route
  - `next`: hook์ ํด๊ฒฐํ๊ธฐ ์ํด ๋ฐ๋์ ํธ์ถ๋์ด์ผ ํ๋ค. `next`์๋ ๋ช๊ฐ์ง ์ธ์๋ฅผ ์ ๊ณต

    - `next()`
    - `next(false)`
    - `next('/') or next({path:'/'})`
    - `next(error)`

  - ์ฐธ๊ณ  : https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

* **Route Guard**
  - `router.js` ๋ผ์ฐํธ์ ์ค์  ๊ฐ์ฒด์ ์ง์  ์ ์
  - `beforeEnter` : ์ ์ญ ๊ฐ๋์ ๊ฐ์ signature? ์ญํ ?
  ```js
  props: true,
  beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('getJMTZs').then(getJMTZs => {
          routeTo.params.getJMTZs = getJMTZs
          next()
      })
    }
  ```
  - `props: true`์ด๋ฉด `routeTo.params`๊ฐ `props`๋ก ์ค์ 

- **mapState**

  - ๊ฐ์ ์ปดํฌ๋ํธ์์์ state์ ๋ค๋ฅธ ๋ถ๋ถ๋ค์ ์ ๊ทผํ ๋ this.\$store.state.something ์ด๋ ๊ฒ ํ๋ฉด ๋๋ฌด ๊ธธ๊ณ  ๋ฐ๋ณต์ ์ด๋ผ ๋นํจ์จ์ ์ด๋ค.

  ```js
  computed: mapState(['getJMTZs'])
  ```

  - `/modules/user.js/`์ ์๋ state.user์ ์ ๊ทผํ ๋(namespaced)

    ```js
    template
    $store.state.user.user

    script
    this.$store.state.user.user
    ```

- **login์ ์ง**

  - firebase ์ธ์ ์ ์ง์ด์ฉํด์ผ ๋ ๋ฏ
  - ํ์ฌ localstorage๋ก ํ๋ ค๋ค๊ฐ id, password ์ถ๊ฐํ ๋ ค๋ฉด ์ํธํํด์ผ ๋๋ฏ๋ก firebase๋ก ์ค๊ณ๋ฅผ ๋ค์ ํด์ผ๋ ๋ฏํ๋ค.
  - ํ์ฌ๋ `router { meta }` ์ด์ฉํด์ ๋ก๊ทธ์ธ ํ๋ฉด์ผ๋ก

- **NProgress**

  - `NProgress.start()` ํ๊ณ  ๋ผ์ฐํธ ๋ ์ฝ๋ meta ๊ฒ์ฌํ์ฌ ๋ก๊ทธ์ธ ๊ถํ์ด ํ์ํ ํ์ด์ง ๋ถ๊ธฐ์ฒ๋ฆฌํ ๋
  - `login, join`์์๋ component์์ ์ ์ฉ

- getJMTZ์ ์๋ฌด๊ฒ๋ ์์๋ ์๋ required๋๋ฌธ์ธ๋ฏ ํ์ธ ์๋ง
- `this.$emit('input', event.target.value)` `input`์ ๋ํด ๋ค์ ๋ณด๊ธฐ

  - ํด๊ฒฐ : `v-model`์ด `input` ์ด๋ฒคํธ๋ฅผ ๋ฐ๋๋ค.

- input validate error
  - v-model์์ ์ ํ์ค์๊ฐ์์
    :value="event.title"
    @input="(value) => { event.title = value }" ์ด๊ฑธ๋ก input ์ด๋ฒคํธ ๋ฐ์ํ๋๋ฐ
    v-on="\$listeneres"๋ก ๋ค์ input๋ฅผ ๋ฐ์ผ๋๊น ์ค๋ณต!
- LOGIN ๋ฒํผ ๋๋ฅด๋ฉด ๋ฐ๋ก ๋์ด๊ฐ ๋๋ ๊ธฐ์กด DB ๊ฐ์ง๊ณ  ์์(๋ก๊ทธ์์์), ๋ก๊ทธ์์์ ๋ก๊ทธ์ธ ํ๋ฉด์ผ๋ก ๋์ด๊ฐ, ๋ก๊ทธ์ธ ๊ถํ ์๋ ํ์ด์ง์์ ๋ก๊ทธ์์ ํด๋ ๋ก๊ทธ์ธ ํ๋ฉด์ผ๋ก ๋์ด๊ฐ

  - ํด๊ฒฐ : `router meta ์ฌ์ฉ`

    ```js
    // ์์ 
    const router = new VueRouter({
      routes: [
        {
          path: '/foo',
          component: Foo,
          children: [
            {
              path: 'bar',
              component: Bar,
              // ๋ฉํ ํ๋
              meta: { requiresAuth: true }
            }
          ]
        }
      ]
    })
    ```

    - `routes` ๊ฐ์ฒด๋ฅผ **๋ผ์ฐํธ ๋ ์ฝ๋**๋ผ๊ณ  ํฉ๋๋ค. ์ค์ฒฉ์ด ๊ฐ๋ฅ, ๋ฐ๋ผ์ `/foo/bar`์ ๊ฒฝ์ฐ๋ `/foo`,`/bar` ๋๋ค ์ผ์น
    - `routeTo.matched`๋ ๋ผ์ฐํธ์ ์ผ์นํ๋ ๋ชจ๋  ๋ผ์ดํธ ์ฝ๋๋ฅผ ๋ฐฐ์ด๋ก ๋ธ์ถ, ์ฌ๊ธฐ์ meta ์์ฑ์ ๊ทผํ์ฌ ๊ฒ์ฌ


    ```js
    meta: {
        authRequired: true
    },
    router.beforeEach((routeTo, routeFrom, next) => {
        NProgress.start()
        if (routeTo.matched.some(record => record.meta.authRequired)) {
            if (!store.state.user.isAuthenticated) {
            next({
                path: '/login'
            })
            } else {
            next()
            }
        } else {
            next()
        }
        })
    ```

- LOGIN ํ ๋ค๋ก๊ฐ๊ธฐ ํ ๋ ๋ค์ ๋ก๊ทธ์ธ ํ์ด์ง ๋์ด

  - ํด๊ฒฐ : **router.replace ์ฌ์ฉ**
    - https://router.vuejs.org/kr/guide/essentials/navigation.html

- ์์ฑ ๋ฐ์ธ๋ฉ

  - `v-bind:categories="categories`๋ฅผ ํตํด ์์์ `BaseSelect`์ ์ ๋ฌ
    - `categories="categories"`๊ฐ ๋๋์ค์์๋๋ฐ ๋ฌธ์์ด๋ง ๊ฐ๋ฅ

- BaseComponent ๊ธ๋ก๋ฒ๋ก ์ฌ์ฉํ๊ธฐ

  - `<BaseInput></BaseInput>` ํด๋์ค๋ฅผ ๋ฃ์๋๋ฐ `input`์ ์ ์ฉ๋์ง ์๊ณ  `<div>`์ ์ ์ฉ๋ ๊น?
  - `inheritAttrs` : this option does not affect class and style bindings.

- form validation

  - vuelidate ์ฌ์ฉ
  - @blur, \$linsters ์ด๋ฒคํธ ์ถฉ๋, computed๋ก ํด๊ฒฐ
  - validations, JMTZObject๋ก ์ ๊ทผ
  - blur : ํด๋ฆญํ๋ค ๋๊ฐ๋ฉด, ์ฆ ํ๋ฒ ํฐ์นํ๊ณ  ๋๊ฐ๊ฒ ๋๋ฉด touch ์ ์ฉ
    - ๊ทธ๋ฌ๋ฉด \$dirty true ๋ง๊ทธ๋๋ก ๋๋ฝ๊ฒ๋๋ค. ํ๋ฒ ๊ฑด๋ค์๋ค.
    - $error : this.$dirty && !this.$pending && this.$invalid. ์ฌ๊ธฐ์ dirty, invalid ์ฌ์ฉํด ์๋ฌ ๋ฐ์. ์ฒ์ ๋ก๋๋์๋ง์ ์๋ฌ ๋ฉ์ธ์ง ๋จ๋ฉด ์๋๋ ํฐ์น๋ ํ ์ ์ฉํ๊ธฐ

- api ํธ์ถ ์ ์ฑ๊ณต, ์คํจ ์๋ฆผ, ์ค๋ณต ์ด๋ฉ์ผ

  - `NotificationContainer, NotificationBar` ์ปดํฌ๋ํธ ์์ฑํ์ฌ `dispatch-> commit`์ผ๋ก Vuex ๊ด๋ฆฌ

- ๊ฐ์ธ ํต๊ณ ๊ทธ๋ํ

  - https://www.chartjs.org/docs/latest/charts/doughnut.html
  - https://vue-chartjs.org/guide/#troubleshooting
  - https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/

- FireBase ์์ฑ๋ ๊ฐ์ฒด์ id์ key ๊ฐ์ถ๊ฐ

  - https://stackoverflow.com/questions/38768576/in-firebase-when-using-push-how-do-i-get-the-unique-id-and-store-in-my-databas

- **logout์ warning**
  - `vue.runtime.esm.js?2b0e:619 [Vue warn]: Missing required prop: "getJMTZs"`
  - ๊ฐํ์ ์ผ๋ก ๋ฐ์ํ๋๋ฐ ํ์ธํ์
