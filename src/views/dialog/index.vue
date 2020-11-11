<script>
  import View from '@/views/View'

  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'msg-dialog',
    metaInfo: { title: 'Msg Dialog' },
    extends: View,
    mixins: [
      LoadSections([
        'msg-dialog',
      ]),
    ],
    props: {
      id: {
        type: String,
        default: 'msg-dialog',
      },
    },
    created() {
      console.log('msg dialog view is loaded')
    }
  }
</script>
