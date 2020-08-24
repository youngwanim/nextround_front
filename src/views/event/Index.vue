<script>
  import View from '@/views/View'

  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Event',
    metaInfo: { title: 'Event' },
    extends: View,
    mixins: [
      LoadSections([
        'event'
      ]),
    ],
    props: {
      id: {
        type: String,
        default: 'event',
      },
    },
  }
</script>
