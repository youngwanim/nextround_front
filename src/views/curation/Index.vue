<script>
  import View from '@/views/View'

  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'curation',
    metaInfo: { title: 'curation' },
    extends: View,
    mixins: [
      LoadSections([
        'curation'
      ]),
    ],
    props: {
      id: {
        type: String,
        default: 'curation',
      },
    },
  }
</script>
