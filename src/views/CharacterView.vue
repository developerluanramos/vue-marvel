<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { BaseRepositoryFactory } from '@/repositories/BaseRepositoryFactory'

const CharacaterRepository = BaseRepositoryFactory.get('characters')
@Options({})
export default class CharacterView extends Vue {
  async created() {
    await CharacaterRepository.listAll()
  }
}
</script>

<template>
  <div>
    <h1>Characters</h1>
  </div>
</template>

<style scoped lang="scss">

</style>