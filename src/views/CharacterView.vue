<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { BaseRepositoryFactory } from '@/repositories/BaseRepositoryFactory'

const CharacterRepository = BaseRepositoryFactory.get('characters')
@Options({})
export default class CharacterView extends Vue {
  async created() {
    await CharacterRepository.listAll()
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