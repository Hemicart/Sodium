<template>
  <CollectionChart
    ref="chartCollection"
    :datas7d="chartOptions7Data"
    :datas30d="chartOptions30Data"
    :datas90d="chartOptions90Data"
    :collectionID="this.$route.params.paramCollectionID" />
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import CollectionChart from '@/components/CollectionChart'

export default {
  components: {
    CollectionChart
  },
  data() {
    return {
      datas: [],
      chartOptions90Data: [],
      chartOptions7Data: [],
      chartOptions30Data: []
    }
  },
  async created() {
    const response = await axios.get('/api/get_table2/' + this.$route.params.paramCollectionID);
    this.datas = response.data;

     let dateWeek = moment().subtract(7, 'days'),
        dateMonth = moment().subtract(30, 'days');

    this.datas.forEach((item) => {
      if ( item["label"] == "T" ) {
        this.chartOptions90Data.push({
          x: moment(item["block_timestamp"]).unix(),
          y: item["value"],
          tokenID: item["token_id"],
          selected: false
        })
      }

      if ( moment(item["block_timestamp"]).isAfter(dateWeek) ) {
        this.chartOptions7Data.push({
          x: moment(item["block_timestamp"]).unix(),
          y: item["value"],
          tokenID: item["token_id"],
          selected: false
        })
      }

      if ( moment(item["block_timestamp"]).isAfter(dateMonth) ) {
        this.chartOptions30Data.push({
          x: moment(item["block_timestamp"]).unix(),
          y: item["value"],
          tokenID: item["token_id"],
          selected: false
        })
      }
    });
  }
}
</script>
<style lang="scss">

</style>
