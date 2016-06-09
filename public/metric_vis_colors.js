define(function (require) {
  // we need to load the css ourselves
  require('plugins/metric_vis_colors/metric_vis_colors.less');

  // we also need to load the controller and used by the template
  require('plugins/metric_vis_colors/metric_vis_colors_controller');

  // register the provider with the visTypes registry
  require('ui/registry/vis_types').register(MetricVisProvider);

  function MetricVisProvider(Private) {
    const TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));
    const Schemas = Private(require('ui/Vis/Schemas'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'metric-vis-colors',
      title: 'Metric with Colors',
      description: 'One big number for all of your one big number needs. Perfect for showing ' +
        'a count of hits, or the exact average a numeric field. Now with customizable colors.',
      icon: 'fa-calculator',
      template: require('plugins/metric_vis_colors/metric_vis_colors.html'),
      params: {
        defaults: {
          handleNoResults: true,
          fontSize: 60,
          bgColor: 'white',
          fontColor: 'black'
        },
        editor: require('plugins/metric_vis_colors/metric_vis_colors_params.html')
      },
      schemas: new Schemas([
        {
          group: 'metrics',
          name: 'metric',
          title: 'Metric',
          min: 1,
          defaults: [
            { type: 'count', schema: 'metric' }
          ]
        }
      ])
    });
  }

  // export the provider so that the visType can be required with Private()
  return MetricVisProvider;
});
