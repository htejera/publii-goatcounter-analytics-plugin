<div align="center">
  <img src="https://raw.githubusercontent.com/htejera/publii-goatcounter-analytics-plugin/a914f8fa6f2f86d617cd12f0cd1ca4d8c823cf19/thumbnail.svg" width= "30%" height="30%" alt="GoatCounter Integration for Publii">
</div>

# GoatCounter Integration for Publii

This plugin enables [Publii](https://getpublii.com/) site owners to easily integrate [GoatCounter](https://www.goatcounter.com) analytics and visitor counters into their websites, providing insights into site traffic and individual page views without compromising user privacy.

## Features

- Simple GoatCounter code integration.
- Optional visitor counter display with customization options.
- Support for HTML, SVG, and PNG counter types.
- Customizable counter position using CSS selectors.
- Option to remove GoatCounter branding from the visitor counter.

## Setup

1. **GoatCounter Endpoint**: You’ll need to copy this to the integration settings:

   ![GoatCounter Encpoint](https://github.com/htejera/publii-goatcounter-analytics-plugin/blob/main/goatcounter-endpoint.jpg?raw=true)

2. **Plugin Configuration**: Navigate to your Publii site settings and find the GoatCounter Integration plugin under the "Plugins" section.

   ![Plugin configuration 1](https://github.com/htejera/publii-goatcounter-analytics-plugin/blob/main/plugin-configuration-1.png?raw=true)
   ![Plugin configuration 2](https://github.com/htejera/publii-goatcounter-analytics-plugin/blob/main/plugin-configuration-2.png?raw=true)

3. **Enter GoatCounter Code**: Input your GoatCounter code in the provided field to link your Publii site with GoatCounter analytics.

4. **Preview Mode**: Optionally, enable the output of the analytics code in preview mode for testing purposes. Remember to disable this before going live to avoid skewed analytics data.

## Visitor Counter

To display a visitor counter on your site:

1. **Enable Visitor Counter**: Check the **"Show Visitor Counter"** option in the plugin settings on Publii. You will need to enable **“Allow adding visitor counts on your website”** in your site settings panel on GoatCounter; this defaults to off to prevent unintentional leaking of data.

   ![GoatCounter allow adding visitor counts](https://github.com/htejera/publii-goatcounter-analytics-plugin/blob/main/allow-adding-visitor-counts.jpg?raw=true)

2. **Selector Configuration**: Specify the CSS selector for the parent element where the visitor counter will be appended. Default is `footer`.

3. **Counter Type**: Choose the type of visitor counter (HTML, SVG, or PNG) according to your preference. An example of how this looks with the default settings:

   ![Visit counter](https://github.com/htejera/publii-goatcounter-analytics-plugin/blob/main/visitor-counter.jpg?raw=true)

6. **Remove Branding**: Optionally, enable **"Remove GoatCounter Branding"** to hide the **"by GoatCounter"** text from the visitor counter.

## Customization

The visitor counter can be further customized through CSS. Depending on the counter type chosen (HTML or SVG), different elements can be styled:

- **HTML Counter**: Style the surrounding `div` and internal elements as needed.
- **SVG Counter**: Customize the `#gcvc-border`, `#gcvc-for`, `#gcvc-views`, and `#gcvc-by` elements using CSS.

Refer to the GoatCounter [documentation](https://www.goatcounter.com/help/visitor-counter) for more detailed information on styling counters.

## GDPR consent
This plugin does not handle GDPR consent, since GoattCounter (probably) does not require it. More information here: [GDPR consent notices](https://www.goatcounter.com/help/gdpr).

For more details on GoatCounter and its features, visit the [official GoatCounter website](https://www.goatcounter.com/).

## License

This plugin is licensed under the MIT License.

Feel free to contribute to the development or suggest improvements by submitting a pull request or opening an issue on GitHub.
