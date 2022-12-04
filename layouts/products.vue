<template>
    <div>
<header class="shadow-sm bg-white">
  <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Nuxt</NuxtLink>
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services">Services</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contacts">Contacts</NuxtLink>
        </li>
                <li>
          <NuxtLink to="products/"  class="btn">Products</NuxtLink>
        </li>
      </ul>
  </nav>
</header>
    <div  class="container mx-auto p-4">
        <slot />
    </div>

<footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services">Services</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contacts">Contacts</NuxtLink>
        </li>
                <li>
          <NuxtLink to="products/">Products</NuxtLink>
        </li>
      </ul>
  </footer>    
    </div>
</template>
