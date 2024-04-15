<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { BaseRepositoryFactory } from '@/repositories/BaseRepositoryFactory'

const AsteroidsRepository = BaseRepositoryFactory.get('asteroids')
@Options({})
export default class AsteroidsView extends Vue {
  asteroids = {
    near_earth_objects: []
  }
  async created() {
    this.asteroids = await AsteroidsRepository.listByFilters({
      start_date: '',
      end_date: '',
      api_key: 'uWJQo7q3nyEglJsBE2TTg6IwMHqI9d0ATfOwa3Kj'
    })
  }
}
</script>

<template>
  <div>
    <img src="https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_640.png" alt="">
    <ul>
      <li v-for="(spaceObjects, index) of asteroids.near_earth_objects" :key="index">
        {{index}}
        <ul>
          <li v-for="(objects, indexOf) of spaceObjects" :key="indexOf">
            <img :style="{height: objects.absolute_magnitude_h+'px'}" src="https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_640.png" alt="">
            {{ JSON.stringify(objects.nasa_jpl_url) }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>