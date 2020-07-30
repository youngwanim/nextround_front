<script>
  import View from '@/views/View'

  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Signup',
    metaInfo: { title: 'Signup' },
    extends: View,
    mixins: [
      LoadSections([
        'signup',
      ]),
    ],
    props: {
      id: {
        type: String,
        default: 'signup',
      },
    },
  }
</script>
