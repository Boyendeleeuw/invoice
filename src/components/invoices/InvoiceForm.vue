<template>
    <form class="invoice">
        <div class="invoice-group company-settings">
          <span><b>{{ settings.userCompany.value }}</b></span>
          <br>
          <span>{{ settings.userAddress.value }}</span>
          <span>{{ settings.userPostal.value }} {{ settings.userCity.value }}</span>
          <span>{{ settings.userPhone.value }}</span>
          <span>{{ settings.userEmail.value }}</span>
          <br>
          <div class="company-settings-bottom">
            <div>
              <b>KVK:</b><span>{{ settings.userKvk.value }}</span>
            </div>
            <div>
              <b>BTW:</b><span>{{ settings.userBtw.value }}</span>
            </div>
            <div>
              <b>IBAN:</b><span>{{ settings.userIban.value }}</span>
            </div>
          </div>
        </div>

        <div class="invoice-group client-date">
          <div class="client-setting">
            <h3>Select client</h3>
            <div class="select-client">
              <span class="selector" @click.prevent="showClients = !showClients">Click to select a client <font-awesome-icon icon="chevron-down" /></span>
              <div :class="{'show-clients': showClients}">
                <label
                  :class="{'active': selectedClient === client.id, 'show': showClients}"
                  v-for="client in allClients"
                  :key="client"
                  :for="client.id"
                  @click.prevent="selectClient(client.id)">
                  <input type="radio" name="client" :id="client.id">
                  <span><b>{{ client.company }}</b></span>
                  <span>t.a.v. {{ client.contact }}</span>
                  <span>{{ client.address }}</span>
                  <span>{{ client.zipCode }} {{ client.city }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="date-setting">
            <h3>Invoice</h3>
            <div>
              <span><b>Invoice number:</b> 20210001</span>
            </div>
            <div>
              <span><b>Invoice date:</b> {{ new Date().toLocaleDateString('nl-NL') }}</span>
            </div>
          </div>
        </div>

        <table class="invoice-group">
          <thead>
            <th>Description</th>
            <th>Hours</th>
            <th>Hour rate</th>
            <th>Amount in &euro;</th>
            <th></th>
          </thead>
          <tbody>
            <tr v-for="(job, index) in jobs" :key="job">
              <td><input type="text" v-model="job.description"></td>
              <td><input type="number" v-model="job.hours" v-on:change="calcAmount(index)"></td>
              <td><input type="number" v-model="job.hourRate" v-on:change="calcAmount(index)"></td>
              <td><input type="number" v-model="job.amount"></td>
              <td>
                <button class="add-job" @click.prevent="addNewJob" v-if="index === jobs.length - 1">+</button>
                <button class="remove-job" @click.prevent="removeJob(index)" v-if="jobs.length > 1">-</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Subtotal: &euro;{{ sumTotal(jobs).toFixed(2) }}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Tax: &euro;{{ (sumTotal(jobs) * 0.21).toFixed(2) }}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><b>Total: &euro; {{ (sumTotal(jobs) * 1.21).toFixed(2) }}</b></td>
            </tr>
          </tbody>
        </table>

        <div>
            <button @click.prevent="createInvoice">Create invoice</button>
        </div>

        <div v-if="error">
            {{ error }}
        </div>
    </form>
</template>

<script lang="ts">
import { Job } from '@/types/invoices.type'
import useClient from '@/composables/useClient'
import { ref } from 'vue'
import useSettings from '@/composables/useSettings'

export default {
    name: 'InvoiceForm',
    setup() {
        let clients = useClient()
        let jobs = ref<Job[]>([])
        let settings = useSettings()
        let showClients = ref(false)
        let selectedClient = ref()

        clients.getClients()
        settings.getSettings()

        function addNewJob() {
            jobs.value.push({
                description: '',
                hours: 0,
                hourRate: 0,
                amount: 0
            })
        }

        function removeJob(index: number) {
            jobs.value.splice(index, 1)
        }

        function calcAmount(index: number) {
            const hours = jobs.value[index].hours
            const hourRate = jobs.value[index].hourRate
            if (hours && hourRate) {
                if (hours > 0 && hourRate > 0) {
                    jobs.value[index].amount = hours * hourRate
                }
            }
        }

        function selectClient(id: number) {
            selectedClient.value = id
            showClients.value = false
        }

        const sumTotal = (arr: Job[]) =>
            arr.reduce((sum, { amount }) => sum + amount, 0)

        addNewJob()

        return {
            ...clients,
            jobs,
            settings,
            addNewJob,
            removeJob,
            calcAmount,
            sumTotal,
            selectClient,
            showClients,
            selectedClient
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_var';

@media print {
  @page { margin: 0; }
  body { margin: 1.6cm; }
}

.invoice {

  .invoice-group {
    margin: 25px 0;
    width: 100%;
    padding: 25px 0;
    border-bottom: 1px solid #cdcdcd;
  }

  .client-date {
    display: flex;

    .client-setting {
      width: 50%;

      h3 {
        text-align: left;
      }

      input[type=radio] {
        visibility: hidden;
      }

      .select-client {
        text-align: left;

        .selector {
          cursor: pointer;
        }

        .show-clients {
          width: fit-content;
          max-height: 250px;
          overflow-y: scroll;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
        }

        label {
          display: flex;
          flex-direction: column;
          display: none;

          &.active,
          &.show {
            display: flex;
          }
        }
      }
    }

    .date-setting {
      width: 50%;

      h3 {
        margin-left: 50%;
        text-align: left;
      }

      & > div {
        width: 50%;
        margin-left: auto;

        span {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }

  table {
    text-align: right;

    .add-job {
      margin-top: 0;
    }

    .remove-job {
      margin-top: 0;
      margin-left: 5px;
      background-color: #cecece;
    }
  }

  .company-settings {
    display: flex;
    flex-direction: column;
    text-align: right;

    .company-settings-bottom {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      & > div {
        display: flex;
        justify-content: space-between;
        width: 30%
      }
    }
  }
}
</style>
