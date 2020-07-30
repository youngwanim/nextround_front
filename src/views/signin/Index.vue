<script>
  import View from '@/views/View'

  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Signin',
    metaInfo: { title: 'Signin' },
    extends: View,
    mixins: [
      LoadSections([
        'signin',
      ]),
    ],
    props: {
      id: {
        type: String,
        default: 'signin',
      },
    },
  }
</script>
