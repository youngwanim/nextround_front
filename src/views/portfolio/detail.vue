<script>
  import View from '@/views/View'

  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Portfolio-detail',
    metaInfo: { title: 'Portfolio Detail' },
    extends: View,
    mixins: [
      LoadSections([
        'portfolio-detail'
      ]),
    ],
    props: {
      id: {
        type: String,
        default: 'portfolio-detail',
      },
    }
  }
</script>
