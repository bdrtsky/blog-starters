---
title: "Vue.js: a (re)introduction"
image: /images/blog/seven.jpg
tags: ['vue']
previewSnippet: 'Vue.js is a library for building web interfaces. Together with some other tools you can also call it a “framework”, although it’s more like a set of optional tools that work together really well. Now, if you’ve never heard of or used Vue before, you are probably thinking: great, yet another JavaScript framework! I get it. Turns out Vue isn’t particularly new — I first started working on its prototype almost two years ago, and the first public release was in February 2014. Over the time it has been evolving, and today many are using it in production.'
---

 [Vue.js](http://vuejs.org/)  is a library for building web interfaces. Together with some other tools you can also call it a “framework”, although it’s more like a set of optional tools that work together really well. Now, if you’ve never heard of or used Vue before, you are probably thinking: great, yet another JavaScript framework! I get it. Turns out Vue isn’t particularly new — I first started working on its prototype almost two years ago, and the first public release was in  [February 2014](http://blog.evanyou.me/2014/02/11/first-week-of-launching-an-oss-project/) . Over the time it has been evolving, and today  [many are using it in production](https://github.com/vuejs/awesome-vue#projects-using-vuejs) .

So, what exactly does Vue offer? What makes it different? Why in the world would you want to learn about it when there are already Angular, Ember and React? This post attempts to shed some light on these question by taking you through a brief tour of Vue.js concepts, and I hope you will have your own answers after reading it.

## Reactivity
> Keeping the state and the view in sync is hard. Or is it?

Let’s start with the most basic task: displaying data. Suppose we have a simple object:

```js
var object = {
  message: ‘Hello world!’
}
```

And a template:

```js
<div id=“example”>
  {{ message }}
</div>
```

And here’s how we bind the data and the template together with Vue:

```js
new Vue({
  el: ‘#example’,’  data: object
})
```

Looks like we just rendered a template. What should we do to update the view when the object changes? The answer is… *nothing*. Vue has converted the object and made it “reactive”. When you set `object.message` to something else, the rendered HTML updates automatically. More importantly, there’s no need to worry about calling `$apply` in a timeout, or calling `setState()`, or listening to store events, or creating framework-proprietary observables like `ko.observable()` or `Ember.Object.create()…` it just works.

![Gulp](/images/blog/eight.jpg "Gulp")

Vue also provides seamless computed properties:

```js
var example = new Vue({
  data: {
    a: 1
  },
  computed: {
    b: function () {
      return this.a + 1
    }
  }
})

// both a & b are proxied on the created instance.
example.a // -> 1
example.b // -> 2
example.a++
example.b // -> 3
```

The computed property `b` tracks `a` as a dependency, and is automatically kept in sync. No need to declare the dependencies yourself, because you shouldn’t have to.
In addition, POJO-based reactivity makes it trivially easy to integrate with any type of data-source or state management solutions. For example, here’s an integration that enables Vue.js components to bind to RxJS Observables with  [less than 30 lines of code](https://github.com/vuejs/vue-rx/blob/master/vue-rx.js#L22-L51) .

## Components
> Ok the data binding is neat for small demos. What about big apps?

When it comes to structuring complex interfaces, Vue takes an approach that is very similar to React: it’s components all the way down. Let’s make our example a reusable component:

```js
var Example = Vue.extend({
  template: ‘<div>{{ message }}</div>’,
  data: function () {
    return {
      message: ‘Hello Vue.js!’
    }
  }
})

// register it with the tag <example>
Vue.component(‘example’, Example)
```

Now we can use the component in other templates simply as a custom element:
```html
<example></example>
```

Components can contain other components, and they form a tree that represents your UI. To make them actually composable, Vue components can also:

* Define how it expects to receive data from its parent using props;
* Emit custom events to trigger actions in parent scope;
* Compose parent injected content with its own template using <slot>.
We are not going to go into the details here, but if you are interested, checkout more in the  [official guide](http://vuejs.org/guide/components.html) .